import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { z } from 'zod';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { QueryKey } from '@/hooks';
import { exerciseIdSchema as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { exerciseIdUrl } from '@/utils/fetchData';

type Props = {
  params: z.infer<typeof schema>;
} & PropsWithChildren;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { exerciseId } = params;
  let layoutResponse: Metadata;
  try {
    const url = exerciseIdUrl(params.exerciseId);
    const response = await fetch(url);
    const data: Exercise = await response.json();

    layoutResponse = {
      title: `'${data.name
        .split(' ')
        .map((item) => {
          return item.charAt(0).toUpperCase() + item.slice(1);
        })
        .join(' ')}' - Exercise-tracker`,
    };
  } catch (Error) {
    layoutResponse = {
      title: `'${exerciseId}' Not found - Exercise-tracker`,
    };
  }

  return layoutResponse;
}

const ExerciseIdLayout = async ({ children, params }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.exercise, params.exerciseId],
    queryFn: async () => {
      const url = exerciseIdUrl(params.exerciseId);
      // console.debug('target [target] url: ', url);
      const response = await fetch(url);
      const data: Exercise = await response.json();

      return data;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>{children}</main>
    </HydrationBoundary>
  );
};

export default ExerciseIdLayout;
