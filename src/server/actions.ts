import axios from 'axios';

import { Exercise } from '@/types/raw';

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
  return axios.get<Exercise>(`/api/exercises/${exerciseId}`).then((res) => res.data);
};

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
