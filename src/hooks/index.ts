import { useQuery } from '@tanstack/react-query';

import {
  fetchAllExercises,
  fetchBodyPartExercises,
  fetchBodyPartList,
  fetchEquipmentExercises,
  fetchEquipmentList,
  fetchExercise,
  fetchTargetExercises,
  fetchTargetList,
} from '@/server/actions';

export enum QueryKey {
  /**
   * Query key for fetching all exercises
   */
  allExercises = 'all-exercises',

  /**
   * Query key for fetching a single exercise using `exercise Id` or any of the exercise subsets
   *
   * Ex:
   * - exerciseId
   * - exercise by equipment
   * - exercise by target
   * - exercise by body part
   */
  exercise = 'exercise',

  /**
   * Query key for fetching a single equipment exercise
   */
  equipment = 'equipment',

  /**
   * Query key for fetching a target exercises
   */
  target = 'target',

  /**
   * Query key for fetching bodyPart exercises
   */
  bodyPart = 'bodyPart',

  /**
   * Query key for fetching target list
   */
  targetList = 'target-list',

  /**
   * Query key for fetching equipment list
   */
  equipmentList = 'equipment-list',

  /**
   * Query key for fetching equipment list
   */
  bodyPartList = 'body-part-list',
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
 * React query hook for fetching a single exercise using `exercise Id`
 *
 * Uses server action `fetchExercises`
 */
export const useFetchExercise = (exerciseId: string | number) => {
  return useQuery({
    queryKey: [QueryKey.exercise, exerciseId],
    queryFn: () => fetchExercise(exerciseId),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: false,
  });
};

// --------------------------------------------------------------------------------------------- //

/**
 * React query hook for fetching equipment exercises using `equipment`
 *
 * Uses server action `fetchEquipmentExercises`
 */
export const useFetchEquipmentExercises = (equipment: string) => {
  return useQuery({
    queryKey: [QueryKey.exercise, QueryKey.equipment, equipment],
    queryFn: () => fetchEquipmentExercises(equipment),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: false,
  });
};

/**
 * React query hook for fetching target exercises using `target`
 *
 * Uses server action `fetchTargetExercises`
 */
export const useFetchTargetExercises = (target: string) => {
  return useQuery({
    queryKey: [QueryKey.exercise, QueryKey.target, target],
    queryFn: () => fetchTargetExercises(target),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: false,
  });
};

/**
 * React query hook for fetching `body part` exercises using `bodyPart`
 *
 * Uses server action `fetchBodyPartExercises`
 */
export const useFetchBodyPartExercises = (bodyPart: string) => {
  return useQuery({
    queryKey: [QueryKey.exercise, QueryKey.bodyPart, bodyPart],
    queryFn: () => fetchBodyPartExercises(bodyPart),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: false,
  });
};

// --------------------------------------------------------------------------------------------- //

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

/**
 * React query hook for fetching body part list
 *
 * Uses server action `fetchBodyPartList`
 */
export const useFetchBodyPartList = () => {
  return useQuery({
    queryKey: [QueryKey.bodyPartList],
    queryFn: fetchBodyPartList,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
// --------------------------------------------------------------------------------------------- //
