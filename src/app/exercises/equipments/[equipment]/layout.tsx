import { PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { z } from 'zod';

import { QueryKey } from '@/hooks';
import { exerciseEquipment as schema } from '@/schema';
import { fetchEquipmentExercises } from '@/server/actions';

type Props = {
  params: z.infer<typeof schema>;
} & PropsWithChildren;

export function generateMetadata({ params }: Props): Metadata {
  const { equipment } = params;

  const capitalizedStr = equipment
    .split('-')
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join('-');

  return {
    title: `'${capitalizedStr}' equipment exercises - Exercise-tracker`,
  };
}

const EquipmentExercisesLayout = async ({ children, params }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.exercise, QueryKey.equipment, params.equipment],
    queryFn: async () => fetchEquipmentExercises(params.equipment),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>{children}</main>
    </HydrationBoundary>
  );
};

export default EquipmentExercisesLayout;
