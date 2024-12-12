import { eq, and, sql, count } from 'drizzle-orm';

import { db } from '@/db';
import { activities } from '@/db/schema';

/**
 * Prepared statement for querying exercise activity by exercise Id.
 *
 * @see {@link https://orm.drizzle.team/docs/perf-queries}
 * @example
 * ```ts
 * import { selectPreparedStatement } from '@/db/prepared-statements';
 *
 * const dbData = await selectPreparedStatement.execute({
 *   userId: session?.user?.email as string,
 *   exerciseId: +exerciseId,
 * });
 * ```
 */
export const selectExerciseIdActivity = db
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

/**
 * Prepared statement for checking if activity exists using user email and activity `id`
 *
 * @see {@link https://orm.drizzle.team/docs/guides/count-rows}
 * @example
 * ```ts
 * import { checkActivityIdExists } from '@/db/prepared-statements';
 *
 * const dbActivityIdExistsData = await checkActivityIdExists.execute({
 *   userId: session?.user?.email as string,
 *   id: +formData.id,
 * });
 *
 * if (dbActivityIdExistsData[0].count === 0) {
 *   // activity id doesn't exist
 * }
 * ```
 */
export const checkActivityIdExists = db
  .select({ count: count() })
  .from(activities)
  .where(
    and(eq(activities.id, sql.placeholder('id')), eq(activities.userId, sql.placeholder('userId'))),
  )
  .limit(1);

/**
 * Prepared statement for checking if activity exists using user email and activity `id`
 *
 * @see {@link https://orm.drizzle.team/docs/delete}
 * @example
 * ```ts
 * import { deleteActivityId } from '@/db/prepared-statements';
 *
 * const deleteActivityIdData = await deleteActivityId.execute({
 *   userId: session?.user?.email,
 *   id: +formData.id,
 * });
 * ```
 */
export const deleteActivityId = db
  .delete(activities)
  .where(
    and(eq(activities.id, sql.placeholder('id')), eq(activities.userId, sql.placeholder('userId'))),
  )
  .returning({ id: activities.id });
