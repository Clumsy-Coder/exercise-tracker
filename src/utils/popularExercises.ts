/**
 * A list of popular leg exercises.
 *
 * contains exercise Ids
 */
export const popularLegExercises = [
  '0043', // barbell squat
  '0032', // barbell deadlift
  '0058', // barbell hip thrust
  '0336', // dumbbell lunge
  '0585', // leg extensions
  '0599', // leg curl
  '0042', // barbell front squat
  '0196', // cable pull through with rope
  '1425', // single leg press
  '0582', // single leg curl
  '0605', // standing calf raise machine
];

/**
 * A list of popular chest exercises
 *
 * contains exercise Ids
 */
export const popularChestExercises = [
  '0025', // barbell bench press
  '0251', // dips
  '0179', // low to high cable fly
  '0030', // close grip barbell bench press
  '0314', // dumbbell incline bench press
  '0596', // pec dec
];

/**
 * A list of popular triceps exercises
 *
 * contains exercise Ids
 */
export const popularTricepExercises = [
  '0351', // dumbbell isolateral skullcrusher
  '0860', // cable triceps kickback
];

/**
 * A list of popular shoulder exercises
 *
 * contains exercise Ids
 */
export const popularShoulderExercises = [
  '0290', // dumbbell shoulder press
  '0334', // dumbbell lateral raise
  '1457', // barbell military press
  '0192', // cable lateral raise
];

/**
 * A list of popular back exercises
 *
 * contains exercise Ids
 */
export const popularBackExercises = [
  '0007', // alternative lateral pulldown
  '0652', // pull up
  '3017', // pendlay row
  '0581', // machine high row
  '0218', // cable seated row elbow out
  '0861', // cable seated row
  '0237', // pullover
  '0095', // barbell shrug
  '0602', // reverse pec dec
  '0027', // barbell bend over row
];

/**
 * A list of popular bicep exercies
 *
 * contains exercise Ids
 */
export const popularBicepExercises = [
  '0447', // EZ barbell curl
  '0372', // dumbbell preacher curl
  '0190', // single arm cable curl
];

/**
 * A list of popular forearm exercises
 *
 * contains exercise Ids
 */
export const popularForearmExercises = [
  '0451', // reverse EZ barbell curl
  '0313', // hammer curl
];

/**
 * A list of popular Ab exercises
 *
 * contains exercise Ids
 */
export const popularAbExercises = [
  '0875', // ab wheel rollout
  '0262', // bicycle crunch
];

// --------------------------------------------------------------------------------------------- //

/**
 * A collection of popular chest, shoulder and triceps exercises
 *
 * contains exercise Ids
 */
export const popularPushExercises = [
  ...popularChestExercises,
  ...popularTricepExercises,
  ...popularShoulderExercises,
];

/**
 * A collection of popular back and bicep exercises
 *
 * contains exercise Ids
 */
export const popularPullExercises = [
  ...popularBackExercises,
  ...popularBicepExercises,
  ...popularForearmExercises,
];

/**
 * A collection of popular exercises
 */
export const popularExercises = [
  '0043', // barbell squat
  '0025', // barbell bench press
  '0290', // dumbbell shoulder press
  '0032', // barbell deadlift
  '0027', // barbell bend over row
  '0652', // pull up
];
