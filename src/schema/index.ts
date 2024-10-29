import { z } from 'zod';

import { distanceEnum, weightEnum } from '@/db/schema';
import moment from 'moment';

/**
 * Schema validation for endpoint `/api/exercises/[exerciseId]`
 *
 * Also used in `./src/app/exercises/[exerciseId]/page.tsx`
 */
export const exerciseIdSchema = z.object({
  exerciseId: z.coerce
    .number({ invalid_type_error: 'Exercise ID must be a number' })
    .min(1, 'Exercise ID must be a number greater than 0'),
});

/**
 * Schema validation for endpoint `/api/exercises/equipments/[equipment]`
 *
 * Also used in `./src/app/exercises/equipments/[equipment]/page.tsx`
 */
export const exerciseEquipment = z.object({
  equipment: z.coerce.string().min(1, 'Exercise equipment must be at least 1 character long'),
});

/**
 * Schema validation for endpoint `/api/exercises/targets/[target]`
 *
 * Also used in `./src/app/exercises/targets/[target]/page.tsx`
 */
export const exerciseTarget = z.object({
  target: z.coerce.string().min(1, 'Exercise target must be at least 1 character long'),
});

/**
 * Schema validation for endpoint `/api/exercises/body-parts/[bodyPart]`
 *
 * Also used in `./src/app/exercises/body-parts/[bodyPart]/page.tsx`
 */
export const exerciseBodyPart = z.object({
  bodyPart: z.coerce.string().min(1, `Exercise 'body part' must be at least 1 character long`),
});

// --------------------------------------------------------------------------------------------- //

/**
 * Schema validation for endpoint `/api/exercises/[exerciseId]/activity`
 *
 * Also used in `./src/app/exercises/[exerciseId]/page.tsx`
 */
export const exerciseEntry = z
  .object({
    exerciseId: z.coerce
      .number({ invalid_type_error: 'Exercise ID must be a number' })
      .min(1, 'Exercise ID must be a number greater than 0'),
    date: z.coerce.date().default(() => new Date()),
    //
    // reps based
    reps: z.coerce
      .number({ invalid_type_error: 'Exercise reps must be a number' })
      .min(0, 'Exercise reps must be at least 0')
      .optional(),
    // .default(0),
    weight: z.coerce.number().min(0).optional(),
    // .default(0),
    weightUnit: z
      .enum(weightEnum.enumValues, {
        // custom error message for enum
        // check:
        // - https://github.com/colinhacks/zod/issues/580#issuecomment-1425044684
        // - https://zod.dev/ERROR_HANDLING?id=customizing-errors-with-zoderrormap
        errorMap: () => ({ message: "Weight unit can be either 'lbs' or 'kg'" }),
      })
      .optional(),
    // .optional()
    // .default('lbs'),
    //
    // distance based
    distance: z.coerce.number().min(0, 'Distance must be greater than 0').optional(),
    // .default(0),
    distanceUnit: z.enum(distanceEnum.enumValues).optional(),
    // .default('km'),
    //
    // duration based
    // duration: z.coerce.date({
    //   errorMap: () => ({
    //     message: 'testting',
    //   }),
    // }),
    duration: z
      .string()
      // match: HH:MM:SS . HH can be any positive number
      .regex(/^(\d){1,2}:([0-5][0-9]):([0-5][0-9])$/, {
        message: 'Invalid time format. Must be HH:MM:SS',
      })
      // .time({
      //   message: 'Exercise duration is required. In format HH:MM:SS',
      // })
      // .refine(
      //   (duration) => {
      //     // return moment(duration, 'HH:MM:SS', true).isValid();
      //     const regex = /(\d){1,2}:([0-5][0-9]):([0-5][0-9])/;
      //
      //     const test = regex.test(duration);
      //     console.log('regex test: ', test);
      //
      //     return test;
      //   },
      //   {
      //     message: 'Invalid time format. Must be HH:MM:SS',
      //     // path: ['duration'],
      //   },
      // )
      .optional(),
    // .optional(),
    // .default(() => new Date('00:00:00')),
  })
  .superRefine((data, ctx) => {
    const { reps, weight, weightUnit, distance, distanceUnit, duration } = data;
    // if no data is provided
    if (
      [reps, weight, weightUnit, distance, distanceUnit, duration].every((v) => v === undefined)
    ) {
      ['reps', 'weight', 'weightUnit', 'distance', 'distanceUnit', 'duration'].forEach((cur) => {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Either provide 'reps', 'weight' and 'weight unit, OR provide 'distance' and 'distance unit' OR 'duration'",
          path: [cur],
        });
      });
    }

    // if either `reps`, `weight` or `weight unit` is provided
    if ([reps, weight, weightUnit].some((v) => v !== undefined)) {
      // apply error message to missing properties
      ['reps', 'weight', 'weightUnit']
        .filter((cur) => data[cur as keyof typeof data] === undefined)
        .forEach((cur) => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Required',
            path: [cur],
          });
        });
    }

    // if either `distance`, or `distance unit` is provided
    if ([distance, distanceUnit].some((v) => v !== undefined)) {
      // apply error message to missing properties
      ['distance', 'distanceUnit']
        .filter((cur) => data[cur as keyof typeof data] === undefined)
        .forEach((cur) => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Provide 'Distance' and 'Distance unit'",
            path: [cur],
          });
        });
    }
  });
