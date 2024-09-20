import { NextResponse } from 'next/server';
import { z } from 'zod';

import { exerciseEquipment as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { equipmentUrl } from '@/utils/fetchData';

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
  const { equipment } = params;

  const url = equipmentUrl(equipment.replaceAll(' ', '-'));
  try {
    const response = await fetch(url);
    const data: Exercise[] = await response.json();

    return Response.json(data);
  } catch (error) {
    const message = {
      message: `Exercise equipment '${equipment}' not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }
};
