import { useQuery } from '@tanstack/react-query';

import { fetchAllExercises } from '@/server/actions';

export enum QueryKey {
  /**
   * Query key for fetching all exercises
   */
  allExercises = 'all-exercises',
}

// --------------------------------------------------------------------------------------------- //

/**
 * React query hook for fetching all exercises
 *
 * Uses server action `fetchAllExercises`
 */
export const useFetchAllExercises = () => {
  return useQuery({
    queryKey: [QueryKey.allExercises],
    queryFn: fetchAllExercises,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
