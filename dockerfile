# syntax=docker.io/docker/dockerfile:1

# obtained from
# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
# https://dev.to/maxdemaio/nextjs-and-docker-2496
#
# docker best practice
# https://snyk.io/blog/10-docker-image-security-best-practices/

# Building image
# docker build -t uhunt:dev -f ./dockerfile .

# tldr
# - Stage: dev
#   - copy package.json and pnpm-lock.yaml to docker image
#   - install npm packages using package.json and pnpm-lock.yaml
# - Stage: builder
#   - copy node_modules from stage `dev`
#   - copy source files to docker image
#   - build source files using NextJS
# - Stage: runner
#   - apply docker image label for Github container registry
#   - Set ENV to production
#   - Copy build files from stage builder
#   - Switch to the newly created user
#   - Expose port (default to 3000)
#   - Run production server

####################################################################################################

# Base on official Node.js Alpine image
FROM node:23-alpine AS base

#--------------------------------------------------------------------------------------------------#
# Install dependencies only when needed
FROM base AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies
# check npm help ci
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

#--------------------------------------------------------------------------------------------------#

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./ ./

# Build app
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1
RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

#--------------------------------------------------------------------------------------------------#

# Production image, copy all the files and run next
FROM base AS runner

# label used to connect the docker image to the github repo
# check https://docs.github.com/en/free-pro-team@latest/packages/guides/connecting-a-repository-to-a-container-image#connecting-a-repository-to-a-container-image-on-the-command-line
# LABEL org.opencontainers.image.source https://github.com/username/repo

WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
