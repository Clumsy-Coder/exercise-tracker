import { NextResponse } from 'next/server';
import { z } from 'zod';

import { exerciseIdSchema as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { exerciseIdUrl } from '@/utils/fetchData';

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

  const url = exerciseIdUrl(`${exerciseId}`);
  // console.debug('target [target] url: ', url);

  // fetch the data. if theirs an error, it's likely either github is down or the exercise id doesn't exist
  try {
    const response = await fetch(url);

    const data: Exercise = await response.json();

    return Response.json(data);
  } catch (error) {
    const message = {
      message: `Exercise ID ${exerciseId} not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }
};
