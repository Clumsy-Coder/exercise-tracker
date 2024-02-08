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
};

module.exports = nextConfig;
