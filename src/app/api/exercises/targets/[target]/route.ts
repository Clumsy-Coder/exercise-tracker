import { NextResponse } from 'next/server';
import { z } from 'zod';

import { exerciseTarget as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { targetUrl } from '@/utils/fetchData';

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

  // get query param
  const { target } = params;

  const url = targetUrl(target.replaceAll(' ', '-'));
  try {
    const response = await fetch(url);
    const data: Exercise[] = await response.json();

    return Response.json(data);
  } catch (error) {
    const message = {
      message: `Exercise target '${target}' not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }
};
