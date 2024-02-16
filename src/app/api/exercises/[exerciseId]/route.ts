import { NextResponse } from 'next/server';

import { exerciseIdSchema as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { exerciseOptions, fetchExerciseUrl } from '@/utils/fetchData';
import { z } from 'zod';

type GetParamsType = {
  params: z.infer<typeof schema>;
};

/**
 * Fetch an exercise using `exerciseId`
 *
 * Ex:
 * - fetch from url `/api/exercises/0001`
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
  const { exerciseId } = params;

  const url = fetchExerciseUrl(exerciseId);
  const response = await fetch(url, exerciseOptions);
  // if the response is NULL, then exercise ID is not found
  const responseText = await response.text();

  // exercise ID not found
  if (!responseText.length) {
    const message = {
      message: `Exercise ID ${exerciseId} not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }

  const data: Exercise = JSON.parse(responseText);

  return Response.json(data);
};
