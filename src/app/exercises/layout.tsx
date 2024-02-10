import { PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { QueryKey } from '@/hooks';
import { fetchAllExercises } from '@/server/actions';

const ExercisesLayout = async ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.allExercises],
    queryFn: async () => fetchAllExercises(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className='container'>{children}</main>
    </HydrationBoundary>
  );
};

export default ExercisesLayout;
