/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');

// eslint-disable-next-line tsdoc/syntax
/** @type {import('next').NextConfig} */
const nextConfig = {
  // for running in docker.
  // https://github.com/vercel/next.js/tree/canary/examples/with-docker#in-existing-projects
  output: 'standalone',
  // logging
  // https://nextjs.org/docs/app/api-reference/next-config-js/logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.exercisedb.io',
        pathname: '/image/**',
      },
    ],
  },
  // add custom envs
  // check
  // - https://nextjs.org/docs/app/api-reference/next-config-js/env
  // - https://stackoverflow.com/a/71668310/3053548
  //
  // NOTE: this will override the env set in `.env*` files
  //
  // using this method to define the following envs, is because I'd like to generate these ENVs,
  // without running `generateEnvs.sh` before running the nextjs app. Maybe you won't even need to
  // use the `generateEnvs.sh` script
  //
  // ENVs in question
  // - NEXT_PUBLIC_BUILD_VERSION
  // - NEXT_PUBLIC_BUILD_ID
  // - NEXT_PUBLIC_BUILD_TIME
  //
  env: {
    NEXT_PUBLIC_BUILD_VERSION:
      process.env.NEXT_PUBLIC_BUILD_VERSION || execSync('npm run -s generateVersion').toString(),
    NEXT_PUBLIC_BUILD_ID:
      process.env.NEXT_PUBLIC_BUILD_ID || execSync('npm run -s generateBuildId').toString(),
    NEXT_PUBLIC_BUILD_TIME: process.env.NEXT_PUBLIC_BUILD_TIME || execSync('date +%s').toString(),
  },
};

module.exports = nextConfig;
