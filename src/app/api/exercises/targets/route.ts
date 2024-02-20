import data from '@/utils/data/target.json';
// import { exerciseOptions, fetchTargetListUrl } from '@/utils/fetchData';

/**
 * Fetch target list
 */
export const GET = async () => {
  // const url = fetchTargetListUrl();
  // const response = await fetch(url, exerciseOptions);
  // const data: string[] = await response.json();

  // regex for selecting all or any spaces
  const regex = /\s+/gi;
  return Response.json((data as string[]).map((item) => item.replaceAll(regex, '-')));
};
