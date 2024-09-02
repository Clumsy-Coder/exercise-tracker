import { targetListUrl } from '@/utils/fetchData';

/**
 * Fetch target list
 */
export const GET = async () => {
  const url = `${targetListUrl()}`;
  // console.debug('equipment url: ', url);
  const response = await fetch(url);
  const data: string[] = await response.json();

  // regex for selecting all or any spaces
  // replace any space with -
  const regex = /\s+/gi;
  return Response.json((data as string[]).map((item) => item.replaceAll(regex, '-')));
};
