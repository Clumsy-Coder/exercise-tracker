import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { db } from '@/db';
import {
  checkActivityIdExists,
  deleteActivityId,
  selectExerciseIdActivity,
} from '@/db/prepared-statements';
import { activities, InsertActivities } from '@/db/schema';
import { exerciseEntry as schema, exerciseIdSchema } from '@/schema';
import { exerciseIdUrl } from '@/utils/fetchData';

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

  const dbData = await selectExerciseIdActivity.execute({
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

type DeleteParamsType = {
  params: z.infer<typeof exerciseIdSchema>;
};

/**
 * Delete a row from `Activities` table using `id` and `userId`
 *
 * Expects to contain the following data
 * - id     REQUIRED
 *
 * @param request - request body containing `id` to delete
 * @param params - URL slug. For this api, it's `exerciseId` from URL `api/exercises/[exerciseId]/activity`
 * @returns 400 if data is invalid, 404 if `id` or exerciseId doesn't exist. 200 if database row was deleted
 */
export const DELETE = async (request: Request, { params }: DeleteParamsType) => {
  // validate exerciseId. return 400 otherwise
  // check if exercise id exists. return 400 otherwise
  // check if formData is formatted properly. check for invalid JSON; return 400 otherwise
  // check if formData `id` exists. return 400 otherwise
  // check if row in `activities` table exists; using `id` and `userId`. return 404 otherwise
  // delete activity entry; using `id` and `userId`
  // return 200. Provide `id` that was deleted

  const { exerciseId } = params;

  // --------------------------------------------------------------------------------------------//
  // validate exerciseId

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
  // check if exercise id exists

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
  // check if formData is properly formatted

  interface DeleteFormData {
    id: number; // activity ID
  }
  let formData: DeleteFormData;
  try {
    formData = await request.json();
    // console.log('data', formData);
  } catch (e) {
    return NextResponse.json({ message: 'JSON is NOT formatted properly' }, { status: 400 });
  }

  // --------------------------------------------------------------------------------------------//
  // check if `id` exists in formData

  if (!formData.id) {
    return NextResponse.json({ message: "Activity 'id' is missing" }, { status: 400 });
  }

  // --------------------------------------------------------------------------------------------//
  // check if database record with `id` and email address exists

  const session = await getServerSession(authOptions);

  const dbActivityIdExistsData = await checkActivityIdExists.execute({
    userId: session?.user?.email,
    id: +formData.id,
  });

  if (dbActivityIdExistsData[0].count === 0) {
    return NextResponse.json(
      { message: `Activity id '${formData.id}' doesn't exist` },
      { status: 404 },
    );
  }

  // --------------------------------------------------------------------------------------------//
  // delete database row using activity `id` and `userId`

  const deleteActivityIdData = await deleteActivityId.execute({
    userId: session?.user?.email,
    id: +formData.id,
  });

  return NextResponse.json({ message: `Activity id '${deleteActivityIdData[0].id}' deleted` });
};

// ////////////////////////////////////////////////////////////////////////////////////////////// //
