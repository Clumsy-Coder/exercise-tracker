import { NextResponse } from 'next/server';
import { z } from 'zod';

import { exerciseTarget as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { baseUrl } from '@/utils/fetchData';

type GetParamsType = {
  params: z.infer<typeof schema>;
};

/**
 * Fetch exercises by an target using `target`
 *
 * Ex:
 * - fetch from url `/api/exercises/target/abs`
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
  const url = `${baseUrl()}/data/exercises.json`;
  // console.debug('target [target] url: ', url);
  const response = await fetch(url);
  const data: Exercise[] = await response.json();

  // --------------------------------------------------------------------------------------------//

  // get query param
  const { target } = params;

  // filter exercises by target
  const filtered = data.filter((item) => item.target === `${target.replaceAll('-', ' ')}`);

  if (!filtered.length) {
    const message = {
      message: `Exercise target '${target}' not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }

  return Response.json(filtered);
};
