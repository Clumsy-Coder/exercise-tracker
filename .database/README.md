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

### split exercises by exercise target

```bash
npx tsx index.ts processTargetExercises
```

[more details](#processtargetexercises)

### split exercises by exercise equipment

```bash
npx tsx index.ts processEquipmentExercises
```

[more details](#processequipmentexercises)

---

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

## processTargetExercises

split the exercise by exercise target and place them in `data/targetExercises/` directory

it would have the following file structure

```bash
data/targetExercises
├── abductors.json
├── abs.json
├── adductors.json
├── biceps.json
├── calves.json
├── cardiovascular-system.json
├── delts.json
├── forearms.json
├── glutes.json
├── hamstrings.json
├── lats.json
├── levator-scapulae.json
├── pectorals.json
├── quads.json
├── serratus-anterior.json
├── spine.json
├── traps.json
├── triceps.json
└── upper-back.json

0 directories, 19 files
```

### options

#### --inputFile

`--inputFile` defaults to `data/exercises.json`

The input file contains all exercises. Formatted as array of objects

example:
```bash
npx tsx index.ts processTargetExercises --inputFile test.json
```

#### --targetDir

`--targetDir` defaults to `data/targetExercises`

The target dir is where the processed data will be placed

example:
```bash
npx tsx index.ts processTargetExercises --targetDir data/targetExercises
```
#### file output

each file in `data/targetExercises` would look like

example `data/targetExercises/abductors.json`
```json
[
  {
    "bodyPart": "upper legs",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/NusOwv13xwJlcc",
    "id": "0597",
    "name": "lever seated hip abduction",
    "target": "abductors",
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ],
    "instructions": [
      "Adjust the seat height so that your knees are at a 90-degree angle.",
      "Sit on the machine with your back against the backrest and your feet on the footrests.",
      "Place your hands on the side handles for stability.",
      "Engage your abductors and slowly push your legs apart, away from the midline of your body.",
      "Pause for a moment at the end of the movement, then slowly bring your legs back together to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  { ... },
  { ... },
  { ... }
]

```
---

## processEquipmentExercises

split the exercise by exercise target and place them in `data/targetExercises/` directory

it would have the following file structure

```bash
data/equipmentExercises
├── assisted.json
├── band.json
├── barbell.json
├── body-weight.json
├── bosu-ball.json
├── cable.json
├── dumbbell.json
├── elliptical-machine.json
├── ez-barbell.json
├── hammer.json
├── kettlebell.json
├── leverage-machine.json
├── medicine-ball.json
├── olympic-barbell.json
├── resistance-band.json
├── roller.json
├── rope.json
├── skierg-machine.json
├── sled-machine.json
├── smith-machine.json
├── stability-ball.json
├── stationary-bike.json
├── stepmill-machine.json
├── tire.json
├── trap-bar.json
├── upper-body-ergometer.json
├── weighted.json
└── wheel-roller.json

0 directories, 28 files
```

### options

#### --inputFile

`--inputFile` defaults to `data/exercises.json`

The input file contains all exercises. Formatted as array of objects

example:
```bash
npx tsx index.ts processEquipmentExercises --inputFile test.json
```

#### --targetDir

`--targetDir` defaults to `data/targetExercises`

The target dir is where the processed data will be placed

example:
```bash
npx tsx index.ts processEquipmentExercises --targetDir data/equipmentExercises
```

#### file output

each file in `data/equipmentExercises` would look like

example `data/equipmentExercises/assisted.json`

```json
[
  {
    "bodyPart": "waist",
    "equipment": "assisted",
    "gifUrl": "https://v2.exercisedb.io/image/MwEuckqM8AEo7B",
    "id": "0011",
    "name": "assisted hanging knee raise",
    "target": "abs",
    "secondaryMuscles": [
      "hip flexors"
    ],
    "instructions": [
      "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
      "Engage your core muscles and lift your knees towards your chest, bending at the hips and knees.",
      "Pause for a moment at the top of the movement, squeezing your abs.",
      "Slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  { ... },
  { ... },
  { ... }
]

```

---

