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

// --------------------------------------------------------------------------------------------- //

/**
 * Default URL for fetching exercise data.
 *
 * The url directory must contain the following
 * - data/
 *   - bodyPart.json
 *   - equipment.json
 *   - exercises.json
 *   - target.json
 * - exercise-gif/
 *   - 0001.gif
 *     ...
 */
export const DEFAULT_EXERCISE_DB_BASE_URL =
  'https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/development/.database';

/**
 * Get the base url for fetching exercise data and exercise gifs.
 *
 * returns value from ENV `NEXT_PUBLIC_EXERCISE_DB_LOCAL_FETCH_BASE_URL` if available.
 * or returns value from `DEFAULT_EXERCISE_DB_LOCAL_FETCH_BASE_URL` as default
 *
 * @see {@link DEFAULT_EXERCISE_DB_BASE_URL}
 * @see {@link process.env.NEXT_PUBLIC_EXERCISE_DB_LOCAL_FETCH_BASE_URL}
 *
 * @defaultValue {@link DEFAULT_EXERCISE_DB_BASE_URL}
 *
 */
export const baseUrl = () =>
  process.env.NEXT_PUBLIC_EXERCISE_DB_BASE_URL || DEFAULT_EXERCISE_DB_BASE_URL;

/**
 * Get the url for fetching all exercises
 *
 * uses `baseUrl` to generate the url
 *
 * @see {@link baseUrl}
 */
export const allExercisesUrl = () => `${baseUrl()}/data/exercises.json`;

/**
 * Get the url for fetching target list
 *
 * uses `baseUrl` to generate the url
 *
 * @see {@link baseUrl}
 */
export const targetListUrl = () => `${baseUrl()}/data/target.json`;

/**
 * Get the url for fetching equipment list
 *
 * uses `baseUrl` to generate the url
 *
 * @see {@link baseUrl}
 */
export const equipmentListUrl = () => `${baseUrl()}/data/equipment.json`;

/**
 * Get the url for fetching body part list
 *
 * uses `baseUrl` to generate the url
 *
 * @see {@link baseUrl}
 */
export const bodyPartListUrl = () => `${baseUrl()}/data/bodyPart.json`;

/**
 * Get the url for fetching exercise id data
 *
 * uses `baseUrl` to generate the url
 *
 * @see {@link baseUrl}
 *
 * @param exerciseId - exercise id
 */
export const exerciseIdUrl = (exerciseId: string | number) => `${baseUrl()}/data/exerciseIdData/${exerciseId}.json`;

/**
 * Get the url for fetching body part [bodyPart] data
 *
 * uses `baseUrl` to generate the url
 *
 * @see {@link baseUrl}
 *
 * @param bodyPart - body part. example: back
 */
export const bodyPartUrl = (bodyPart: string) =>
  `${baseUrl()}/data/bodyPartExercises/${bodyPart}.json`;

/**
 * Get the url for fetching target [target] data
 *
 * uses `baseUrl` to generate the url
 *
 * @see {@link baseUrl}
 *
 * @param target - target. example: abs
 */
export const targetUrl = (target: string) => `${baseUrl()}/data/targetExercises/${target}.json`;
