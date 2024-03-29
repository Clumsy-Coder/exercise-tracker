import { z } from 'zod';

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
