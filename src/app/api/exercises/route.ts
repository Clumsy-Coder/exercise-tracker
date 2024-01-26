import { Exercise } from '@/types/raw';
import { exerciseOptions, fetchAllExercises } from '@/utils/fetchData';

/**
 * Fetch all exercises
 */
export const GET = async () => {
  const url = fetchAllExercises();
  const response = await fetch(url, exerciseOptions);
  const data: Exercise[] = await response.json();

  return Response.json(data);
};
