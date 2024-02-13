import { useQuery } from '@tanstack/react-query';

import { fetchAllExercises, fetchTargetList } from '@/server/actions';

export enum QueryKey {
  /**
   * Query key for fetching all exercises
   */
  allExercises = 'all-exercises',

  /**
   * Query key for fetching target list
   */
  targetList = 'target-list',
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

/**
 * React query hook for fetching target list
 *
 * Uses server action `fetchTargetList`
 */
export const useFetchTargetList = () => {
  return useQuery({
    queryKey: [QueryKey.targetList],
    queryFn: fetchTargetList,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
