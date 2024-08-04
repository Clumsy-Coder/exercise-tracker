import { NextResponse } from 'next/server';
import { z } from 'zod';

import { exerciseBodyPart as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { DEFAULT_EXERCISE_DB_LOCAL_FETCH_BASE_URL } from '@/utils/fetchData';

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
  // fetch the exercises data from remote source
  const baseUrl =
    process.env.NEXT_PUBLIC_EXERCISE_DB_LOCAL_FETCH_BASE_URL ||
    DEFAULT_EXERCISE_DB_LOCAL_FETCH_BASE_URL;
  const url = `${baseUrl}/data/exercises.json`;
  // console.debug('body-parts [bodyPart] url: ', url);
  const response = await fetch(url);
  const data: Exercise[] = await response.json();

  // --------------------------------------------------------------------------------------------//

  const { bodyPart } = params;

  // filter exercises by body part
  const filtered = data.filter((item) => item.bodyPart === `${bodyPart.replaceAll('-', ' ')}`);

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
