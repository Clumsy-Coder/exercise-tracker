import { Exercise } from '@/types/raw';
import { allExercisesUrl } from '@/utils/fetchData';

/**
 * Fetch all exercises
 */
export const GET = async () => {
  const url = `${allExercisesUrl()}`;
  // console.debug('all exercises url: ', url);
  const response = await fetch(url);
  const data: Exercise[] = await response.json();

  return Response.json(data as Exercise[]);
};
