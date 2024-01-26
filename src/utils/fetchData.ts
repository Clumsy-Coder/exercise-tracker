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
 */
export const fetchAllExercises = () => `https://exercisedb.p.rapidapi.com/exercises`;
