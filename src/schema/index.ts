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
