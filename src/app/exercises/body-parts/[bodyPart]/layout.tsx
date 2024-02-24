import { PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { z } from 'zod';

import { QueryKey } from '@/hooks';
import { exerciseBodyPart as schema } from '@/schema';
import { fetchBodyPartExercises } from '@/server/actions';

type Props = {
  params: z.infer<typeof schema>;
} & PropsWithChildren;

export function generateMetadata({ params }: Props): Metadata {
  const { bodyPart } = params;

  const capitalizedStr = bodyPart
    .split('-')
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join('-');

  return {
    title: `'${capitalizedStr}' body part exercises - Exercise-tracker`,
  };
}

const BodyPartExercisesLayout = async ({ children, params }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.exercise, QueryKey.bodyPart, params.bodyPart],
    queryFn: async () => fetchBodyPartExercises(params.bodyPart),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>{children}</main>
    </HydrationBoundary>
  );
};

export default BodyPartExercisesLayout;
