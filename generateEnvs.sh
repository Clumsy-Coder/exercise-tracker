#!/bin/bash

# creates ENVs and puts them into .env.local file
# NOTE: this is ONLY used for development purposes only.

set -x
# generate ENVs

# if running vercel. it has `vercel.json` file OR if running github actions
#   return npm package version
# else
#   return value from npm script `generateVersion`
if [ -z "$(git status --porcelain)" ]; then
  BUILD_VERSION=$(npm pkg get version | tr -d '\"')
else
  BUILD_VERSION=$(npm run -s generateVersion)
fi

{
  echo "NEXT_PUBLIC_BUILD_VERSION=$BUILD_VERSION"
  echo "NEXT_PUBLIC_BUILD_ID=$(npm run -s generateBuildId)"
  echo "NEXT_PUBLIC_BUILD_TIME=$(date +%s)"                       # build date & time in unix time
  # ----------------------------------------------------------------------------------------------#
  # next auth ENVs
  #
  # Google OAuth2.0 credentials
  # - https://next-auth.js.org/providers/google
  # - https://support.google.com/cloud/answer/6158849?hl=en
  #
  # echo "GOOGLE_CLIENT_ID="
  # echo "GOOGLE_CLIENT_SECRET="
  #
  # next auth secrets.
  # - https://next-auth.js.org/deployment
  #
  # echo "NEXTAUTH_SECRET="  # for encrypting JWT. generate using command     openssl rand -base64 100
  # echo "NEXTAUTH_URL="     # for handling url redirect after logging in
  # ----------------------------------------------------------------------------------------------#
  # base url for fetching exercise data
  # for more info, check file `./src/types/env.d.ts`
  #
  # default: https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/development/.database/
  #
  # echo "NEXT_PUBLIC_EXERCISE_DB_LOCAL_FETCH_BASE_URL="
  # ----------------------------------------------------------------------------------------------#
} > .env

