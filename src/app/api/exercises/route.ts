import { Exercise } from '@/types/raw';
import { baseUrl } from '@/utils/fetchData';

/**
 * Fetch all exercises
 */
export const GET = async () => {
  const url = `${baseUrl()}/data/exercises.json`;
  // console.debug('all exercises url: ', url);
  const response = await fetch(url);
  const data: Exercise[] = await response.json();

  return Response.json(data as Exercise[]);
};
