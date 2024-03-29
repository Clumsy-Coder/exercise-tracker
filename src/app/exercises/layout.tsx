import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { QueryKey } from '@/hooks';
import { fetchAllExercises, fetchEquipmentList, fetchTargetList } from '@/server/actions';

export const metadata: Metadata = {
  title: 'All Exercises - Exercise-tracker',
  description: 'View all Exercises',
};

const ExercisesLayout = async ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.allExercises],
    queryFn: async () => fetchAllExercises(),
  });
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.targetList],
    queryFn: async () => fetchTargetList(),
  });
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.equipmentList],
    queryFn: async () => fetchEquipmentList(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className='container'>{children}</main>
    </HydrationBoundary>
  );
};

export default ExercisesLayout;
