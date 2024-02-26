'use client';

import Link from 'next/link';

import HomePageLoading from '@/app/loading';
import ExerciseCard from '@/components/exerciseCard';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useFetchAllExercises } from '@/hooks';
import { cn } from '@/lib/utils';
import { Exercise } from '@/types/raw';
import { popularExercises } from '@/utils/popularExercises';

const Home = () => {
  const { isPending, data } = useFetchAllExercises();

  if (isPending) {
    return <HomePageLoading />;
  }

  return (
    <section className='container mb-8 flex flex-col gap-5'>
      <div className='flex flex-col items-center justify-center gap-8'>
        <p className='text-center text-3xl font-bold'>
          View the most effective exercises for building muscle
        </p>
        <Link
          href='/exercises'
          className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'capitalize')}
        >
          Show exercises
        </Link>
      </div>
      <Separator />
      <h1 className='text-5xl font-bold'>Popular Exercises</h1>
      {/* display popular leg exercise cards */}
      {/* show cards in horizontal scroll for smaller screens */}
      <div className='flex flex-row items-center gap-8 overflow-x-scroll pb-3 md:hidden'>
        {popularExercises.map((item) => (
          <ExerciseCard
            key={`popular-leg-exercise-${item}`}
            data={(data as Exercise[]).find((exercise) => exercise.id === item) as Exercise}
            className='w-[20rem] min-w-[20rem] max-w-[20rem]'
          />
        ))}
      </div>
      {/* show cards in horizontal scroll for larger screens */}
      <div className='hidden w-full grid-cols-1 gap-8 pt-2 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {popularExercises.map((item) => (
          <ExerciseCard
            key={`popular-leg-exercise-${item}`}
            data={(data as Exercise[]).find((exercise) => exercise.id === item) as Exercise}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
