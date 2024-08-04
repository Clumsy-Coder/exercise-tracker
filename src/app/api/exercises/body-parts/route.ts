import { baseUrl } from '@/utils/fetchData';

/**
 * Fetch exercise body part list
 */
export const GET = async () => {
  const url = `${baseUrl()}/data/bodyPart.json`;
  // console.debug('body part url: ', url);
  const response = await fetch(url);
  const data: string[] = await response.json();

  // regex for selecting all or any spaces
  // replace any space with -
  const regex = /\s+/gi;
  return Response.json((data as string[]).map((item) => item.replaceAll(regex, '-')));
};
