'use client';

import { AxiosError } from 'axios';
import { z } from 'zod';

import TargetExercisesPageLoading from '@/app/exercises/targets/[target]/loading';
import Error from '@/components/error';
import ExercisesGroup from '@/components/exercisesGroup';
import { Separator } from '@/components/ui/separator';
import { useFetchTargetExercises } from '@/hooks';
import { exerciseTarget as schema } from '@/schema';

type Props = {
  params: z.infer<typeof schema>;
};

const ExercisesPage = ({ params }: Props) => {
  const { isPending, data, isError, error } = useFetchTargetExercises(params.target);

  if (isPending) {
    return <TargetExercisesPageLoading />;
  }

  if (isError) {
    type ErrorMessage = {
      message: string;
    };

    const status = (error as AxiosError<ErrorMessage>).response?.status;
    const message = (error as AxiosError<ErrorMessage>).response?.data.message;

    return (
      <Error
        status={status as number}
        message={message}
      />
    );
  }

  return (
    <section className='flex flex-col gap-5'>
      <div className='flex flex-wrap gap-5 whitespace-nowrap text-5xl capitalize'>
        <p className='font-bold'>{params.target}</p>
        <p className='font-thin'>Exercises</p>
      </div>
      <Separator className='my-4 hidden lg:flex' />
      <ExercisesGroup exercises={data} />
    </section>
  );
};

export default ExercisesPage;
