import { eq, and, sql } from 'drizzle-orm';

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
