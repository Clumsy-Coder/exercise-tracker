import { PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { z } from 'zod';

import { QueryKey } from '@/hooks';
import { exerciseBodyPart as schema } from '@/schema';
import { baseUrl } from '@/utils/fetchData';

type Props = {
  params: z.infer<typeof schema>;
} & PropsWithChildren;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bodyPart } = params;

  let layoutResponse: Metadata;

  try {
    const url = `${baseUrl()}/data/bodyPartExercises/${bodyPart.replaceAll(' ', '-')}.json`;
    const response = await fetch(url);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await response.json();

    const capitalizedStr = bodyPart
      .split('-')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('-');

    layoutResponse = {
      title: `'${capitalizedStr}' body part exercises - Exercise-tracker`,
    };
  } catch (error) {
    layoutResponse = {
      title: `Exercise body part '${bodyPart}' Not found - Exercise-tracker'`,
    };
  }

  return layoutResponse;
}

const BodyPartExercisesLayout = async ({ children, params }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.exercise, QueryKey.bodyPart, params.bodyPart],
    queryFn: async () => {
      const url = `${baseUrl()}/data/bodyPartExercises/${params.bodyPart.replaceAll(' ', '-')}.json`;
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

export default BodyPartExercisesLayout;
