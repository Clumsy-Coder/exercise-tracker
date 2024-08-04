import { Exercise } from '@/types/raw';
import { DEFAULT_EXERCISE_DB_LOCAL_FETCH_BASE_URL } from '@/utils/fetchData';

/**
 * Fetch all exercises
 */
export const GET = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_EXERCISE_DB_LOCAL_FETCH_BASE_URL ||
    DEFAULT_EXERCISE_DB_LOCAL_FETCH_BASE_URL;
  const url = `${baseUrl}/data/exercises.json`;
  // console.debug('all exercises url: ', url);
  const response = await fetch(url);
  const data: Exercise[] = await response.json();

  return Response.json(data as Exercise[]);
};
