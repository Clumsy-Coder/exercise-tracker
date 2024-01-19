// eslint-disable-next-line tsdoc/syntax
/** @type {import('next').NextConfig} */
const nextConfig = {
  // for running in docker.
  // https://github.com/vercel/next.js/tree/canary/examples/with-docker#in-existing-projects
  output: 'standalone',
};

module.exports = nextConfig;
