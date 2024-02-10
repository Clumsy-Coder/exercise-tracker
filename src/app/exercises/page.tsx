'use client';

import { useFetchAllExercises } from '@/hooks';

const ExercisesPage = () => {
  const { isLoading, data } = useFetchAllExercises();

  return (
    <section className='flex flex-col gap-5'>
      <h1 className='text-5xl font-bold'>Exercises</h1>
      {data?.map((item) => (
        <p key={`${item.name}-${item.id}`}>
          {item.id} - {item.name}
        </p>
      ))}
    </section>
  );
};

export default ExercisesPage;
