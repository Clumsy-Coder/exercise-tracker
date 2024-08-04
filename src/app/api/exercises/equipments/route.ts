import { DEFAULT_EXERCISE_DB_LOCAL_FETCH_BASE_URL } from '@/utils/fetchData';

/**
 * Fetch exercise equipment list
 */
export const GET = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_EXERCISE_DB_LOCAL_FETCH_BASE_URL ||
    DEFAULT_EXERCISE_DB_LOCAL_FETCH_BASE_URL;
  const url = `${baseUrl}/data/equipment.json`;
  // console.debug('equipment url: ', url);
  const response = await fetch(url);
  const data: string[] = await response.json();

  // regex for selecting all or any spaces
  // replace any space with -
  const regex = /\s+/gi;
  return Response.json((data as string[]).map((item) => item.replaceAll(regex, '-')));
};
