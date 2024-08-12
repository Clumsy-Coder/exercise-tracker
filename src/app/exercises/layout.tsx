import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { QueryKey } from '@/hooks';
import { Exercise } from '@/types/raw';
import { baseUrl } from '@/utils/fetchData';

export const metadata: Metadata = {
  title: 'All Exercises - Exercise-tracker',
  description: 'View all Exercises',
};

const ExercisesLayout = async ({ children }: PropsWithChildren) => {
  const regex = /\s+/gi;

  const queryClient = new QueryClient();
  // fetch all exercises
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.allExercises],
    queryFn: async () => {
      const url = `${baseUrl()}/data/exercises.json`;
      const response = await fetch(url, { cache: 'force-cache' });
      const data: Exercise[] = await response.json();

      return data;
    },
  });
  // fetch target list
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.targetList],
    queryFn: async () => {
      const url = `${baseUrl()}/data/target.json`;
      const response = await fetch(url, { cache: 'force-cache' });
      const data: string[] = await response.json();

      return data.map((item) => item.replaceAll(regex, '-'));
    },
  });
  // fetch equipment list
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.equipmentList],
    queryFn: async () => {
      const url = `${baseUrl()}/data/equipment.json`;
      const response = await fetch(url, { cache: 'force-cache' });
      const data: string[] = await response.json();

      return data.map((item) => item.replaceAll(regex, '-'));
    },
  });
  // fetch body part list
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.bodyPartList],
    queryFn: async () => {
      const url = `${baseUrl()}/data/bodyPart.json`;
      const response = await fetch(url, { cache: 'force-cache' });
      const data: string[] = await response.json();

      return data.map((item) => item.replaceAll(regex, '-'));
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className='container'>{children}</main>
    </HydrationBoundary>
  );
};

export default ExercisesLayout;
