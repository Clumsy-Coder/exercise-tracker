# extracting exercises data

## split objects in `exercises.json`

to split array of objects in `exercises.json`, run the following command

<!--
obtained from
- https://stackoverflow.com/a/73246141/3053548

-->

```bash
npx tsx processExercisesData.ts
```

the split exercises data will placed in `./exerciseIdData/` directory

### why

when fetching from url `/api/exercises/0001`, it would

1. fetch data from [`https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/112-move-exercise-assets-out/.database/data/exercises.json`](https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/112-move-exercise-assets-out/.database/data/exercises.json)
2. search for the exercise using exercise id
3. respond with data found

with the new approach, it would

1. fetch data from [`https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/112-move-exercise-assets-out/.database/data/exerciseIdData/0001.json`](https://raw.githubusercontent.com/Clumsy-Coder/exercise-tracker/112-move-exercise-assets-out/.database/data/exerciseIdData/0001.json)
2. Respond with data found

NOTE: this makes it easy when fetching an exercise id that doesn't exist
