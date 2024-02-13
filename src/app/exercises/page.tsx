'use client';

import ExercisesGroup from '@/components/exercisesGroup';
import { useFetchAllExercises } from '@/hooks';

const ExercisesPage = () => {
  const { isLoading, data } = useFetchAllExercises();

  if (isLoading || !data) {
    return <h1>Loading</h1>;
  }

  return (
    <section className='flex flex-col gap-5'>
      <h1 className='text-5xl font-bold'>Exercises</h1>
      <ExercisesGroup exercises={data} />
    </section>
  );
};

export default ExercisesPage;
