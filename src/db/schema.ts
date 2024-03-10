/**
 * This file is used for setting up database tables, enums, etc
 *
 * Database entities are exported so drizzle-kit can access them
 *
 * To generate database migrations, run command
 * ```bash
 * pnpm run db:generate
 * ```
 */

import {
  bigserial,
  doublePrecision,
  index,
  integer,
  interval,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

// --------------------------------------------------------------------------------------------- //

/**
 * Enum used for defining an weight exercise unit
 * Ex: weight in `kg` or `lbs` for an exercise `bench press`
 */
export const weightEnum = pgEnum('weightUnit', ['kg', 'lbs']);
/**
 * Enum used for defining an distance exercise unit.
 * Ex: weight in `km` or `mile` for an exercise `treadmill`
 */
export const distanceEnum = pgEnum('distanceUnit', ['km', 'mile']);

// --------------------------------------------------------------------------------------------- //

/**
 * Exercise entry
 *
 * uses the following data for an entry
 * - id: ID of the table row
 * - userId : userId from google
 * - exerciseId: exerciseId
 * - reps: number of reps of the exercise
 * - weight: weight used for an exercise
 * - weightUnit: weight unit of the exercise. uses Enum; either `kg` or `lbs`
 * - distance: distance unit of the exercise. uses Enum; either `km` or `mile`
 * - distanceUnit: weight unit of the exercise. uses Enum; either `kg` or `lbs`
 * - duration: duration of an exercise. Ex: 30 seconds on plank exercise
 * - date: date and time of the exercise set completed
 */
export const activities = pgTable('activities', {
  /**
   * ID of the table row
   */
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  /**
   * Google userId
   */
  userId: text('userId').notNull(),
  /**
   * Exercise ID
   */
  exerciseId: varchar('exerciseId').notNull(),
  /**
   * Reps used on an exercises
   */
  reps: integer('reps'),
  /**
   * Weight used on an exercise set
   */
  weight: doublePrecision('weight'),
  /**
   * Weight unit for the exercise set
   */
  weightUnit: weightEnum('weightUnit'),
  /**
   * Weight used on an exercise set
   */
  distance: doublePrecision('distance'),
  /**
   * Weight unit for the exercise set
   */
  distanceUnit: distanceEnum('distanceUnit'),
  /**
   * Exercise duration.
   *
   * Ex: 30 seconds on exercise `plank`
   */
  duration: interval('duration', { fields: 'minute to second' }),
  /**
   * Date and time when completing an exercise set
   */
  date: timestamp('date', { mode: 'date', precision: 0, withTimezone: true })
    .notNull()
    .defaultNow(),
  },
  (table) => ({
    userIdIndex: index('userId_idx').on(table.userId).asc(),
    exerciseIdIndex: index('exerciseId_idx').on(table.exerciseId).asc(),
    dateIndex: index('index_idx').on(table.date).desc(),
  }),
);

// --------------------------------------------------------------------------------------------- //
