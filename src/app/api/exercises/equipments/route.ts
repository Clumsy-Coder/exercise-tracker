import data from '@/utils/data/equipment.json';
// import { exerciseOptions, fetchEquipmentListUrl } from '@/utils/fetchData';

/**
 * Fetch exercise equipment list
 */
export const GET = async () => {
  // const url = fetchEquipmentListUrl();
  // const response = await fetch(url, exerciseOptions);
  // const data: string[] = await response.json();

  // regex for selecting all or any spaces
  const regex = /\s+/gi;
  return Response.json((data as string[]).map((item) => item.replaceAll(regex, '-')));
};
