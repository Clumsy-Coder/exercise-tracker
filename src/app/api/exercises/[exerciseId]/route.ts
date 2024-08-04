import { NextResponse } from 'next/server';
import { z } from 'zod';

import { exerciseIdSchema as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { baseUrl } from '@/utils/fetchData';

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

  const url = `${baseUrl()}/data/exercises.json`;
  // console.debug('target [target] url: ', url);
  const response = await fetch(url);
  const data: Exercise[] = await response.json();

  const filtered = data.filter((item) => item.id === `${exerciseId}`);

  if (!filtered.length) {
    const message = {
      message: `Exercise ID ${exerciseId} not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }

  return Response.json(filtered[0]);
};
