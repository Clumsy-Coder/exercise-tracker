import { eq, and, sql } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { db } from '@/db';
import { activities, InsertActivities } from '@/db/schema';
import { exerciseEntry as schema, exerciseIdSchema } from '@/schema';
import { exerciseIdUrl } from '@/utils/fetchData';
import { Exercise } from '@/types/raw';

type GetParamsType = {
  params: z.infer<typeof exerciseIdSchema>;
};

/**
 * Get the exercise activity by exerciseId and userId
 */
export const GET = async (_request: Request, { params }: GetParamsType) => {
  const schemaResponse = await exerciseIdSchema.safeParseAsync(params);
  if (!schemaResponse.success) {
    const message = {
      message: schemaResponse.error.issues[0].message,
    };

    return NextResponse.json(message, {
      status: 400,
    });
  }

  // --------------------------------------------------------------------------------------------//
  // check exercise ID exists
  const { exerciseId } = params;

  try {
    const url = exerciseIdUrl(`${exerciseId}`);
    const response = await fetch(url);

    await response.json();
  } catch (_e) {
    const message = {
      message: `Exercise ID ${exerciseId} not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }

  // --------------------------------------------------------------------------------------------//

  // fetch exercise ID activity from database

  const session = await getServerSession();

  const selectPreparedStatement = db
    .select({
      id: activities.id,
      exerciseId: activities.exerciseId,
      reps: activities.reps,
      weight: activities.weight,
      weightUnit: activities.weightUnit,
      distance: activities.distance,
      distanceUnit: activities.distanceUnit,
      duration: activities.duration,
      date: activities.date,
    })
    .from(activities)
    .where(
      and(
        eq(activities.userId, sql.placeholder('userId')),
        eq(activities.exerciseId, sql.placeholder('exerciseId')),
      ),
    )
    .orderBy(activities.date)
    .prepare('select_exerciseId_activity');

  const dbData = await selectPreparedStatement.execute({
    userId: session?.user?.email as string,
    exerciseId: +exerciseId,
  });

  return Response.json(dbData);
};

// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Insert an exercise set into the database. The user MUST be logged in.
 *
 * Expects to contain the following data
 * - exerciseId     REQUIRED
 * - date           REQUIRED
 * - reps
 * - weight
 * - weightUnit
 * - distance
 * - distanceUnit
 * - duration
 *
 * The user can enter partial data in groups. It must contain at least one group
 * Ex: exercise that uses reps, weight
 * Ex: exercise that uses distance
 * Ex: exercise that uses duration
 *
 * groups:
 * - reps based
 *   - reps
 *   - weight
 *   - weightUnit
 * - distance based
 *   - distance
 *   - distanceUnit
 * - duration based
 *   - duration
 *
 * If the data entered is valid, and is successfully inserted into the database, code 200 will be returned.
 * If there's an error in the data validation, code 400 will be returned
 *
 * @example
 * when providing rep based exercise data
 * ```json
 * {
 *   "exerciseId": "0001",
 *   "reps": 10,
 *   "weight": 20,
 *   "weightUnit": "kg",
 *   "date": "2024-10-03T01:12:28.629Z"
 * }
 * ```
 *
 * @example
 * when providing distance based exercise data
 * ```json
 * {
 *   "exerciseId": "0001",
 *   "distance": 10,
 *   "distanceUnit": "km",
 *   "date": "2024-10-03T01:12:28.629Z"
 * }
 * ```
 *
 * @example
 * when providing duration based exercise data
 * ```json
 * {
 *   "exerciseId": "0001",
 *   "duration": "00:09:01",
 *   "date": "2024-10-03T01:12:28.629Z"
 * }
 * ```
 *
 * @example
 * when providing all exercise data
 * ```json
 *  {
 *    "exerciseId": "0001",
 *    "reps": 10,
 *    "weight": 20,
 *    "weightUnit": "kg",
 *    "distance": 30,
 *    "distanceUnit": "km",
 *    "duration": "00:09:01",
 *    "date": "2024-10-03T01:12:28.629Z"
 *  }
 * ```
 *
 * @example
 * when providing insufficient reps based exercise data. Will return code 400
 * ```json
 * {
 *   "exerciseId": "0001",
 *   "reps": 10,
 *   "weight": 20,
 *   "date": "2024-10-03T01:12:28.629Z"
 * }
 * ```
 *
 * @example
 * when providing insufficient distance based exercise data. Will return code 400
 * ```json
 * {
 *   "exerciseId": "0001",
 *   "distance": 10,
 *   "date": "2024-10-03T01:12:28.629Z"
 * }
 * ```
 *
 * @example
 * when providing no exercise data. Will return code 400
 * ```json
 * {
 *   "exerciseId": "0001",
 *   "date": "2024-10-03T01:12:28.629Z"
 * }
 * ```
 *
 * @param request - request body containing exercise properties. Ex: reps, weight, weightUnit
 * @returns 400 if the data is invalid. 200 if the data is inserted to the database
 */
export const POST = async (request: Request) => {
  // https://stackoverflow.com/a/55874235
  let formData: InsertActivities;
  try {
    formData = await request.json();
    // console.log('data', formData);
  } catch (e) {
    return NextResponse.json({ message: 'JSON is formatted properly' }, { status: 400 });
  }

  const schemaResponse = await schema.safeParseAsync(formData);
  if (schemaResponse.error) {
    const message = {
      ...schemaResponse.error.format(),
    };

    return NextResponse.json(message, { status: 400 });
  }

  const session = await getServerSession(authOptions);
  const data: InsertActivities = {
    ...formData,
    userId: session?.user?.email as string,
    date: new Date(formData.date as unknown as string),
    // exerciseId: formData.exerciseId as string,
    // reps: +formData.reps,
    // weight: +formData.weight,
    // weightUnit: formData.weightUnit as 'kg' | 'lbs',
    // distance: +formData.distance,
    // distanceUnit: formData.distanceUnit as 'km' | 'mile',
    // duration: (formData.duration as string) || '00:00:00',
  };

  // console.log('inserting data: ', data);

  const dbInsertResult = await db.insert(activities).values(data).returning({
    id: activities.id,
    exerciseId: activities.exerciseId,
    date: activities.date,
    reps: activities.reps,
    weight: activities.weight,
    weightUnit: activities.weightUnit,
    distance: activities.distance,
    distanceUnit: activities.distanceUnit,
    duration: activities.duration,
  });
  // .then((res) => {
  //   console.log('after db insert', res);
  // });
  // console.log('database inserted data', dbInsertResult);

  return Response.json({ message: 'success', data: dbInsertResult }, { status: 201 });
};

// ////////////////////////////////////////////////////////////////////////////////////////////// //
