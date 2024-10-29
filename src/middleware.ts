// setup nextjs middleware with next-auth
// check
// - https://next-auth.js.org/tutorials/securing-pages-and-api-routes#nextjs-middleware

// eslint-disable-next-line no-restricted-exports
export { default } from 'next-auth/middleware';

export const config = { matcher: ['/api/exercises/id/:exerciseId/activity'] };
