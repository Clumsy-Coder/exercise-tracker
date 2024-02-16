/**
 * Fetch header for Exercise DB
 */
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.EXERCISE_DB_API,
  },
};

// --------------------------------------------------------------------------------------------- //

/**
 * URL for fetching all Exercises
 *
 * @param limit - max number exercises to fetch
 * @defaultValue `limit` - `10`
 */
export const fetchAllExercisesUrl = (limit = 10) =>
  `https://exercisedb.p.rapidapi.com/exercises?limit=${limit}`;

/**
 * URL for fetching target list
 */
export const fetchTargetListUrl = () => `https://exercisedb.p.rapidapi.com/exercises/targetList`;

/**
 * URL for fetching exercise equipment list
 */
export const fetchEquipmentListUrl = () =>
  `https://exercisedb.p.rapidapi.com/exercises/equipmentList`;

/**
 * URL for fetching a single exercise
 *
 * @param exerciseId - exercise ID
 */
export const fetchExerciseUrl = (exerciseId: string | number) =>
  `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`;
