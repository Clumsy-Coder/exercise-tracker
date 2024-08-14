import fs from 'fs';
import { writeFile } from 'node:fs/promises';
import path from 'path';

import { Exercise } from '../../src/types/raw';

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
const EXERCISE_DATA_FILEPATH = 'exercises.json';
const EXERCISE_ID_TARGET_DIR = 'exerciseIdData';

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
      const data = JSON.stringify(obj, null, 2);

      writeFile(filePath, data)
        .then(() => console.log(`Successfully wrote ${fileName}`))
        .catch((err: Error) => console.error(`Error writing to file ${fileName}:`, err));
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Run a function to process exercises data
 *
 * Available processes
 * - Process exercise ID data into their own file. Ex: move object with id 0001 to file 0001.json
 */
const main = () => {
  processExercisesIdData()
};

main();
