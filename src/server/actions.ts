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
