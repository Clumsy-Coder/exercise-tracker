import { NextResponse } from 'next/server';
import { z } from 'zod';

import { exerciseBodyPart as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import allExercisesData from '@/utils/data/exercises.json';

type GetParamsType = {
  params: z.infer<typeof schema>;
};

/**
 * Fetch exercises by an body part using `bodyPart`
 *
 * Ex:
 * - fetch from url `/api/exercises/body-parts/back`
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

  const { bodyPart } = params;

  // filter exercises by body part
  const filtered = (allExercisesData as Exercise[]).filter(
    (item) => item.bodyPart === `${bodyPart.replaceAll('-', ' ')}`,
  );

  if (!filtered.length) {
    const message = {
      message: `Exercise body part '${bodyPart}' not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }

  return Response.json(filtered);
};
