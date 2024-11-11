/*
 * Data structure from ExerciseDB
 * check
 * https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/
 */

export interface Exercise {
  /**
   * Major body part the exercise affects
   * Ex:
   * - back
   * - cardio
   * - chest
   * - lower arms
   * - lower legs
   * - neck
   * - shoulders
   * - upper arms
   * - upper legs
   * - waist
   */
  bodyPart: string;
  /**
   * Equipment used for the exercise
   * Ex:
   * - assisted
   * - band
   * - barbell
   * - body weight
   * - bosu ball
   * - cable
   * - dumbbell
   * - elliptical machine
   * - ez barbell
   * - hammer
   * - kettlebell
   * - leverage machine
   * - medicine ball
   * - olympic barbell
   * - resistance band
   * - roller
   * - rope
   * - skierg machine
   * - sled machine
   * - smith machine
   * - stability ball
   * - stationary bike
   * - stepmill machine
   * - tire
   * - trap bar
   * - upper body ergometer
   * - weighted
   * - wheel roller
   */
  equipment: string;
  /**
   * URL of exercise gif
   */
  gifUrl: string;
  /**
   * Exercise ID
   *
   * Used in fetching a single exercise
   */
  id: string;
  /**
   * Instructions on how to perform the exercise
   */
  instructions: string[];
  /**
   * Name of the exercise
   */
  name: string;
  /**
   * Other muscles affected by the exercise
   */
  secondaryMuscles: string[];
  /**
   * Target muscle
   * Ex:
   * - abductors
   * - abs
   * - adductors
   * - biceps
   * - calves
   * - cardiovascular system
   * - delts
   * - forearms
   * - glutes
   * - hamstrings
   * - lats
   * - levator scapulae
   * - pectorals
   * - quads
   * - serratus anterior
   * - spine
   * - traps
   * - triceps
   * - upper back
   */
  target: string;
}

/**
 * Data structure when querying exercise activity data from the database
 */
export interface ExerciseActivity {
  /**
   * Primary key in table `activities`
   */
  id: number;
  /**
   * User ID. Who performed the exercise
   */
  userId: string;
  /**
   * Exercise ID
   */
  exerciseId: string;
  /**
   * Number of reps performed for the exercise
   */
  reps?: number;
  /**
   * Weight used to perform the exercise
   */
  weight?: number;
  /**
   * Weight unit used for property `weight`
   */
  weightUnit?: 'lbs' | 'kg';
  /**
   * Distance travelled for an exercise
   */
  distance?: number;
  /**
   * Distance unit used for property `distance`
   */
  distanceUnit?: 'km' | 'mile';
  /**
   * Duration of an exercise performed
   */
  duration: string;
  /**
   * Date of the exercise performed
   */
  date: Date;
}
