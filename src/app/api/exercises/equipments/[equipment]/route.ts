import { NextResponse } from 'next/server';
import { z } from 'zod';

import { exerciseEquipment as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import allExercisesData from '@/utils/data/exercises.json';

type GetParamsType = {
  params: z.infer<typeof schema>;
};

/**
 * Fetch exercises by an equipment using `equipment`
 *
 * Ex:
 * - fetch from url `/api/exercises/equipments/body-weight`
 */
export const GET = async (_request: Request, { params }: GetParamsType) => {
  const schemaResponse = await schema.safeParseAsync(params);
  if (!schemaResponse.success) {
    const message = {
      message: schemaResponse.error.issues[0].message,
    };

    return NextResponse.json(message, {
      status: 400,
    });
  }

  // --------------------------------------------------------------------------------------------//

  // fetch exercise ID
  const { equipment } = params;

  // filter exercises by equipment
  const filtered = (allExercisesData as Exercise[]).filter(
    (item) => item.equipment === `${equipment.replaceAll('-', ' ')}`,
  );

  if (!filtered.length) {
    const message = {
      message: `Exercise equipment '${equipment}' not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }

  return Response.json(filtered);
};
