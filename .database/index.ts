import fs from 'fs';
import { writeFile } from 'node:fs/promises';
import path from 'path';

import { Exercise } from '../src/types/raw';

/**
 * Read the data in the provided json file
 *
 * @param filePath File path of the json file
 */
const readJsonFile = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading the JSON file:', error);
    return null;
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////
const EXERCISE_DATA_FILEPATH = 'data/exercises.json';

const EXERCISE_ID_TARGET_DIR = 'data/exerciseIdData';
const EXERCISE_BY_TARGET_DIRPATH = "data/targetExercises"
const EXERCISE_BY_EQUIPMENT_DIRPATH = "data/equipmentExercises"
const EXERCISE_BY_BODY_PART_DIRPATH = "data/bodyPartExercises"

/**
 * Split the exercises array objects into their own files
 *
 * Steps
 * - create target directory if it doesn't exist
 * - read and load the exercises json file
 * - split the exercises array objects into their own files
 *
 * @param objects JS objects
 */
const processExercisesIdData = (inputFile = EXERCISE_DATA_FILEPATH, targetDir = EXERCISE_ID_TARGET_DIR) => {
  const fullTargetDirPath = `${__dirname}/${targetDir}`;

  if (!fs.existsSync(inputFile)) {
    console.error(`File ${inputFile} doesn't exist`)
    console.log('Exiting program')
    process.exit(1)
  }

  // create directory ./exerciseIdData/ if it doesn't exist
  if (!fs.existsSync(fullTargetDirPath)) {
    console.log('creating directory ', fullTargetDirPath);
    fs.mkdirSync(fullTargetDirPath, { recursive: true });
  }

  const jsonFilePath = path.join(__dirname, inputFile);
  const objects: Exercise[] = readJsonFile(jsonFilePath);

  if (!objects.length) {
    console.error(`NO data to process for file ${inputFile}`)
    console.log('Exiting program')

    process.exit(1)
  }

  objects
    .forEach((obj) => {
      const fileName = `${obj.id}.json`;
      const filePath = path.join(__dirname, `${targetDir}/${fileName}`);
      const data = JSON.stringify(obj);

      writeFile(filePath, data)
        .then(() => console.log(`Successfully wrote ${fileName}`))
        .catch((err: Error) => console.error(`Error writing to file ${fileName}:`, err));
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Process exercises into a exercise group.
 *
 * This is used for grouping exercises by
 * - `target`
 * - `equipment`
 * - `bodyPart`.
 *
 * Why this function over a dedicated function for exercise grouping?
 * Repeating code. It can also be generalized into one function
 *
 * Check commit
 * @see 3d50e49
 * @see 7187647
 * @see 67c14af
 *
 * @example
 * group exercises by `target`
 * ```ts
 * processGroupedExercises(inputFile, targetDir, ({ target }) => target)
 * ```
 *
 * @example
 * group exercises by `equipment`
 * ```ts
 * processGroupedExercises(inputFile, targetDir, ({ equipment }) => equipment)
 * ```
 *
 * @example
 * group exercises by `bodyPart`
 * ```ts
 * processGroupedExercises(inputFile, targetDir, ({ bodyPart }) => bodyPart)
 * ```
 *
 * @param inputFile - file containing an array of exercises
 * @param targetDir - destination directory
 * @param groupBy - how to split the exercises. A function that takes an Exercise and return the PropertyKey.  Ex: split by `target`, `equipment` or `bodyPart`
 */
const processGroupedExercises = (inputFile = EXERCISE_DATA_FILEPATH, targetDir: string, groupBy: (item: Pick<Exercise, 'target' | 'equipment' | 'bodyPart'>) => PropertyKey) => {
  const fullTargetDirPath = `${__dirname}/${targetDir}`;
  if (!fs.existsSync(inputFile)) {
    console.error(`File ${inputFile} doesn't exist`)
    console.log('Exiting program')
    process.exit(1)
  }

  // create directory if it doesn't exist
  if (!fs.existsSync(fullTargetDirPath)) {
    console.log('creating directory ', fullTargetDirPath);
    fs.mkdirSync(fullTargetDirPath, { recursive: true });
  }

  const jsonFilePath = path.join(__dirname, inputFile);
  const exercises: Exercise[] = readJsonFile(jsonFilePath);
  // const targets: string[] = readJsonFile(EXERCISE_TARGET_FILEPATH)

  if (!exercises.length) {
    console.error(`NO data to process for file ${inputFile}`)
    console.log('Exiting program')

    process.exit(1)
  }

  const groupedExercises = Object.groupBy(exercises, groupBy)

  for (const [groupedExercise, exercises] of Object.entries(groupedExercises)) {
    // replace space with `-`
    const filepath = `${targetDir}/${groupedExercise.split(' ').join('-')}.json`
    const data = JSON.stringify(exercises)

    writeFile(filepath, data)
      .then(() => console.log(`Successfully wrote ${filepath}`))
      .catch((err: Error) => console.error(`Error writing to file ${filepath}:`, err))
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////

import { Command } from 'commander'

const program = new Command();

// add option for processing exercises by ID
program
  .command('processExerciseId [options]')
  .description('Read `exercises.json` and split them by exercise ID')
  .option('-i --inputFile <filename.json>', "JSON file containing exercises", EXERCISE_DATA_FILEPATH)
  .option('-d --targetDir <folder path>', "Directory to place the split json files", EXERCISE_ID_TARGET_DIR)
  .action((_, options) => {
    const { inputFile, targetDir } = options

    processExercisesIdData(inputFile, targetDir)
  })

// add option for processing exercises by target
program
  .command('processTargetExercises [options]')
  .description('Read `exercises.json` and split them by exercise targets')
  .option('-i --inputFile <filename.json>', "JSON file containing exercises", EXERCISE_DATA_FILEPATH)
  .option('-d --targetDir <folder path>', "Directory to place the split json files", EXERCISE_BY_TARGET_DIRPATH)
  .action((_, options) => {
    const { inputFile, targetDir } = options

    processGroupedExercises(inputFile, targetDir, ({ target }) => target)
  })

// add option for processing exercises by equipment
program
  .command('processEquipmentExercises [options]')
  .description('Read `exercises.json` and split them by exercise equipment')
  .option('-i --inputFile <filename.json>', "JSON file containing exercises", EXERCISE_DATA_FILEPATH)
  .option('-d --targetDir <folder path>', "Directory to place the split json files", EXERCISE_BY_EQUIPMENT_DIRPATH)
  .action((_, options) => {
    const { inputFile, targetDir } = options

    processGroupedExercises(inputFile, targetDir, ({ equipment }) => equipment)
  })

// add option for processing exercises by body part
program
  .command('processBodyPartExercises [options]')
  .description('Read `exercises.json` and split them by exercise body part')
  .option('-i --inputFile <filename.json>', "JSON file containing exercises", EXERCISE_DATA_FILEPATH)
  .option('-d --targetDir <folder path>', "Directory to place the split json files", EXERCISE_BY_BODY_PART_DIRPATH)
  .action((_, options) => {
    const { inputFile, targetDir } = options

    processGroupedExercises(inputFile, targetDir, ({ bodyPart }) => bodyPart)
  })

program.parse(process.argv)
