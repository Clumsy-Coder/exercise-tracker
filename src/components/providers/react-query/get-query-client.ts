import { isServer, QueryClient } from '@tanstack/react-query';

// create the QueryClient
// taking place in a separate file because `QueryClient` will be used in other places.
// Ex:
// - @/hooks/index
//
// code obtained from
// - https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#initial-setup

/**
 * Creates a new QueryClient.
 *
 * ONLY to executed by `getQueryClient`.
 * This function is makeshift private function
 *
 * @see {@link https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#initial-setup}
 */
const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined;

/**
 * Gets the QueryClient.
 * Creates ONLY one QueryClient on the browser.
 * Always creates QueryClient on the server side.
 *
 * This is using a makeshift Singleton pattern
 *
 * @see {@link https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#initial-setup}
 */
export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: make a new query client if we don't already have one
  // This is very important, so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}
