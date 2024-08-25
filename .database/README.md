# extracting exercises data

## usage

### split exercises by exercise ID

<!--
obtained from
- https://stackoverflow.com/a/73246141/3053548
-->
```bash
npx tsx index.ts processExerciseId 
```
[more details](#processexerciseid)

## processExerciseId

split the exercises by exercise ID and places them in `data/exerciseIdData/` directory

it would have the following file structure

```
data/exerciseIdData
├── 0001.json
├── 0002.json
├── 0003.json
├── 0006.json
├── 0007.json
├── 0009.json
├── 0010.json
└── ... .json

0 directories, 1324 files
```

### options

#### --inputFile

`--inputFile` defaults to `data/exercises.json`. 

The input file contains all exercises. Formatted as array of objects

example:
```bash
npx tsx index.ts processExerciseId --inputFile test.json
```

#### --targeDir

`--targetDir` defaults to `data/exerciseIdData`

The target dir is where the processed data will be placed

example:
```bash
npx tsx index.ts processExerciseId --targetDir data/exerciseIdData
```

#### file output

each file in `data/exerciseIdData/` would look like

example `data/exerciseIdData/0001.json`
```json
{
  "bodyPart": "waist",
  "equipment": "body weight",
  "gifUrl": "https://v2.exercisedb.io/image/5Kjv47lzWdrvKu",
  "id": "0001",
  "name": "3/4 sit-up",
  "target": "abs",
  "secondaryMuscles": [
    "hip flexors",
    "lower back"
  ],
  "instructions": [
    "Lie flat on your back with your knees bent and feet flat on the ground.",
    "Place your hands behind your head with your elbows pointing outwards.",
    "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
    "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
    "Repeat for the desired number of repetitions."
  ]
}

```
#### why

when fetching from url `/api/exercises/0001`, it would

1. fetch data from [`https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/112-move-exercise-assets-out/.database/data/exercises.json`](https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/112-move-exercise-assets-out/.database/data/exercises.json)
2. search for the exercise using exercise id
3. respond with data found

with the new approach, it would

1. fetch data from [`https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/112-move-exercise-assets-out/.database/data/exerciseIdData/0001.json`](https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/112-move-exercise-assets-out/.database/data/exerciseIdData/0001.json)
2. Respond with data found

NOTE: this makes it easy when fetching an exercise id that doesn't exist

---
