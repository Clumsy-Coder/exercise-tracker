import { NextResponse } from 'next/server';
import { z } from 'zod';

import { exerciseEquipment as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { baseUrl } from '@/utils/fetchData';

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
  // fetch the exercises data from remote source
  const url = `${baseUrl()}/data/exercises.json`;
  // console.debug('equipment [equipment] url: ', url);
  const response = await fetch(url);
  const data: Exercise[] = await response.json();

  // --------------------------------------------------------------------------------------------//

  // fetch exercise ID
  const { equipment } = params;

  // filter exercises by equipment
  const filtered = data.filter((item) => item.equipment === `${equipment.replaceAll('-', ' ')}`);

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
