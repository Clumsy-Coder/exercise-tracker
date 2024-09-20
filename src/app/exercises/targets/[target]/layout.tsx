import { PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { z } from 'zod';

import { QueryKey } from '@/hooks';
import { exerciseTarget as schema } from '@/schema';
import { targetUrl } from '@/utils/fetchData';

type Props = {
  params: z.infer<typeof schema>;
} & PropsWithChildren;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { target } = params;
  let layoutResponse: Metadata;

  try {
    const url = targetUrl(target.replaceAll(' ', '-'));
    const response = await fetch(url);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await response.json();

    const capitalizedStr = target
      .split('-')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('-');

    layoutResponse = {
      title: `'${capitalizedStr}' target exercises - Exercise-tracker`,
    };
  } catch (error) {
    layoutResponse = {
      title: `Exercise target '${target}' Not found - Exercise-tracker'`,
    };
  }

  return layoutResponse;
}

const TargetExercisesLayout = async ({ children, params }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.exercise, QueryKey.target, params.target],
    // queryFn: async () => fetchTargetExercises(params.target),
    queryFn: async () => {
      const url = targetUrl(params.target.replaceAll(' ', '-'));
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>{children}</main>
    </HydrationBoundary>
  );
};

export default TargetExercisesLayout;
