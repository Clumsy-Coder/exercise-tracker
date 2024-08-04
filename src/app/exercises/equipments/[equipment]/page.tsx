'use client';

import { AxiosError } from 'axios';
import { z } from 'zod';

import Error from '@/components/error';
import ExercisesGroup from '@/components/exercisesGroup';
import { Separator } from '@/components/ui/separator';
import { useFetchEquipmentExercises } from '@/hooks';
import { exerciseEquipment as schema } from '@/schema';
import EquipmentExercisesPageLoading from '@/app/exercises/equipments/[equipment]/loading';

type Props = {
  params: z.infer<typeof schema>;
};

const ExercisesPage = ({ params }: Props) => {
  const { isPending, data, isError, error } = useFetchEquipmentExercises(params.equipment);

  if (isPending) {
    return <EquipmentExercisesPageLoading />;
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
        <p className='font-bold'>{params.equipment}</p>
        <p className='font-thin'>Exercises</p>
      </div>
      <Separator className='my-4 hidden lg:flex' />
      <ExercisesGroup exercises={data} />
    </section>
  );
};

export default ExercisesPage;
