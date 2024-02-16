import { PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { QueryKey } from '@/hooks';
import { fetchExercise } from '@/server/actions';
import { exerciseIdSchema as schema } from '@/schema';
import { z } from 'zod';

type Props = {
  params: z.infer<typeof schema>;
} & PropsWithChildren;

const ExerciseIdLayout = async ({ children, params }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.exercise, params.exerciseId],
    queryFn: async () => fetchExercise(params.exerciseId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>{children}</main>
    </HydrationBoundary>
  );
};

export default ExerciseIdLayout;
