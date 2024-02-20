import { Exercise } from '@/types/raw';
// import { exerciseOptions, fetchAllExercisesUrl } from '@/utils/fetchData';
import data from '@/utils/data/exercises.json';

/**
 * Fetch all exercises
 */
export const GET = async () => {
  // const url = fetchAllExercisesUrl(20000);
  // const response = await fetch(url, exerciseOptions);
  // const data: Exercise[] = await response.json();

  return Response.json(data as Exercise[]);
};
