import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { z } from 'zod';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { QueryKey } from '@/hooks';
import { fetchExercise } from '@/server/actions';
import { exerciseIdSchema as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { baseUrl } from '@/utils/fetchData';

type Props = {
  params: z.infer<typeof schema>;
} & PropsWithChildren;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const url = `${baseUrl()}/data/exercises.json`;
  // console.debug('exercise [exerciseId] url: ', url);
  const response = await fetch(url);
  const data: Exercise[] = await response.json();

  // --------------------------------------------------------------------------------------------//

  const { exerciseId } = params;

  const exercise = data.find((item) => item.id === `${exerciseId}`);

  if (exercise) {
    return {
      title: `'${exercise.name
        .split(' ')
        .map((item) => {
          return item.charAt(0).toUpperCase() + item.slice(1);
        })
        .join(' ')}' - Exercise-tracker`,
    };
  }

  return {
    title: `'${exerciseId}' Not found - Exercise-tracker`,
  };
}

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
