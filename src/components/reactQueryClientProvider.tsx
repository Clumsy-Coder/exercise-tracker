'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, useState } from 'react';

import { QueryKey } from '@/hooks';
import { Exercise } from '@/types/raw';
import { allExercisesUrl, baseUrl } from '@/utils/fetchData';

export const ReactQueryClientProvider = async ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  // prefetch all exercises
  // the home page will display some of the popular exercises
  // WARNING: currnetly NextJS doesn't support async await in client components, so there might be bugs. It works in development (display warning) and production mode
  // NOTE: if there's issue with loading data, comment out prefetch code below, and remove `async` from component function
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.allExercises],
    queryFn: async () => {
      const url = `${allExercisesUrl()}`;
      const response = await fetch(url, { cache: 'force-cache' });
      const data: Exercise[] = await response.json();

      return data;
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
