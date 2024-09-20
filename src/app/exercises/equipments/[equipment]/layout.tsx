import { PropsWithChildren } from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { z } from 'zod';

import { equipmentUrl } from '@/utils/fetchData';
import { QueryKey } from '@/hooks';
import { exerciseEquipment as schema } from '@/schema';

type Props = {
  params: z.infer<typeof schema>;
} & PropsWithChildren;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { equipment } = params;
  let layoutResponse: Metadata;

  try {
    const url = equipmentUrl(equipment.replaceAll(' ', '-'));
    const response = await fetch(url);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await response.json();

    const capitalizedStr = equipment
      .split('-')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('-');

    layoutResponse = {
      title: `'${capitalizedStr}' equipment exercises - Exercise-tracker`,
    };
  } catch (error) {
    layoutResponse = {
      title: `Exercise equipment '${equipment}' Not found - Exercise-tracker'`,
    };
  }

  return layoutResponse;
}

const EquipmentExercisesLayout = async ({ children, params }: Props) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKey.exercise, QueryKey.equipment, params.equipment],
    queryFn: async () => {
      const url = equipmentUrl(params.equipment.replaceAll(' ', '-'));
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

export default EquipmentExercisesLayout;
