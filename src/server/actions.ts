import axios from 'axios';
import { z } from 'zod';

import { Exercise } from '@/types/raw';
import { exerciseEntry as exerciseEntrySchema } from '@/schema';

/**
 * Server action for fetching all exercises.
 *
 * Fetches from URL `/api/exercises`
 */
export const fetchAllExercises = () => {
  return axios.get<Exercise[]>('/api/exercises').then((res) => res.data);
};

/**
 * Server action for fetching a single exercise using `exercise ID`
 *
 * Fetches from URL `/api/exercises/[exerciseId]`
 */
export const fetchExercise = (exerciseId: string | number) => {
  return axios.get<Exercise>(`/api/exercises/id/${exerciseId}`).then((res) => res.data);
};

/**
 * Server action for fetching equipment exercises using `equipment`
 *
 * Fetches from URL `/api/exercises/equipments/[equipment]`
 */
export const fetchEquipmentExercises = (equipment: string) => {
  return axios.get<Exercise[]>(`/api/exercises/equipments/${equipment}`).then((res) => res.data);
};

/**
 * Server action for fetching target exercises using `target`
 *
 * Fetches from URL `/api/exercises/targets/[target]`
 */
export const fetchTargetExercises = (target: string) => {
  return axios.get<Exercise[]>(`/api/exercises/targets/${target}`).then((res) => res.data);
};

/**
 * Server action for fetching `body part` exercises using `bodyPart`
 *
 * Fetches from URL `/api/exercises/body-parts/[bodyPart]`
 */
export const fetchBodyPartExercises = (bodyPart: string) => {
  return axios.get<Exercise[]>(`/api/exercises/body-parts/${bodyPart}`).then((res) => res.data);
};

// --------------------------------------------------------------------------------------------- //

/**
 * Server action for fetching target list
 *
 * Fetches from URL `/api/exercises/target`
 */
export const fetchTargetList = () => {
  return axios.get<string[]>('/api/exercises/targets').then((res) => res.data);
};

/**
 * Server action for fetching exercise equipment list
 *
 * Fetches from URL `/api/exercises/equipments`
 */
export const fetchEquipmentList = () => {
  return axios.get<string[]>('/api/exercises/equipments').then((res) => res.data);
};

/**
 * Server action for fetching exercise body part list
 *
 * Fetches from URL `/api/exercises/body-parts`
 */
export const fetchBodyPartList = () => {
  return axios.get<string[]>('/api/exercises/body-parts').then((res) => res.data);
};

/**
 * Server action for adding an exercise entry.
 *
 * Uses URL: `/api/exercises/id/[exerciseId]/activity`
 *
 * @param data - exercise entry data
 * @returns Promise<AxiosResponse>
 */
export const postExerciseEntry = (data: z.infer<typeof exerciseEntrySchema>) => {
  return axios.post(`/api/exercises/id/${data.exerciseId}/activity`, data);
};
