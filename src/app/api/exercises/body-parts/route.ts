import data from '@/utils/data/bodyPart.json';

/**
 * Fetch exercise body part list
 */
export const GET = async () => {
  // regex for selecting all or any spaces
  const regex = /\s+/gi;
  return Response.json((data as string[]).map((item) => item.replaceAll(regex, '-')));
};
