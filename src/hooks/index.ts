import { useQuery } from '@tanstack/react-query';

import { fetchAllExercises, fetchEquipmentList, fetchTargetList } from '@/server/actions';

export enum QueryKey {
  /**
   * Query key for fetching all exercises
   */
  allExercises = 'all-exercises',

  /**
   * Query key for fetching target list
   */
  targetList = 'target-list',

  /**
   * Query key for fetching equipment list
   */
  equipmentList = 'equipment-list',
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

/**
 * React query hook for fetching equipment list
 *
 * Uses server action `fetchEquipmentList`
 */
export const useFetchEquipmentList = () => {
  return useQuery({
    queryKey: [QueryKey.equipmentList],
    queryFn: fetchEquipmentList,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
