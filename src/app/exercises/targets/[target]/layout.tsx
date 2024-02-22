import { PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { z } from 'zod';

import { QueryKey } from '@/hooks';
import { exerciseTarget as schema } from '@/schema';
import { fetchTargetExercises } from '@/server/actions';

type Props = {
  params: z.infer<typeof schema>;
} & PropsWithChildren;

export function generateMetadata({ params }: Props): Metadata {
  const { target } = params;

  const capitalizedStr = target
    .split('-')
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join('-');

  return {
    title: `'${capitalizedStr}' target exercises - Exercise-tracker`,
  };
}

const TargetExercisesLayout = async ({ children, params }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.exercise, QueryKey.target, params.target],
    queryFn: async () => fetchTargetExercises(params.target),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>{children}</main>
    </HydrationBoundary>
  );
};

export default TargetExercisesLayout;
