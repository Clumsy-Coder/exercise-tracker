'use client';

import Link from 'next/link';

import ExercisesGroup from '@/components/exercisesGroup';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useFetchAllExercises, useFetchEquipmentList, useFetchTargetList } from '@/hooks';
import { cn } from '@/lib/utils';

const ExercisesPage = () => {
  const { isLoading, data } = useFetchAllExercises();
  const { isLoading: targetListIsLoading, data: targetListData } = useFetchTargetList();
  const { isLoading: equipmentListIsLoading, data: equipmentListData } = useFetchEquipmentList();

  if (
    isLoading ||
    targetListIsLoading ||
    equipmentListIsLoading ||
    !data ||
    !targetListData ||
    !equipmentListData
  ) {
    return <h1>Loading</h1>;
  }

  return (
    <section className='flex flex-col gap-5'>
      <h1 className='text-5xl font-bold'>Exercises</h1>
      {/* Exercises by target */}
      <div className='my-4 '>
        <h2 className='mb-3 text-4xl font-semibold'>Exercises by Target</h2>
        {/* <div className='flex flex-wrap gap-2'> */}
        <div className='flex flex-wrap gap-2'>
          {targetListData.map((target) => (
            <Link
              key={`target-${target}`}
              // variant='outline'
              href={`/exercises/targets/${target}`}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'capitalize',
                'max-sm:h-10 max-sm:rounded-md max-sm:px-8',
              )}
            >
              {target.replaceAll('-', ' ')}
            </Link>
          ))}
        </div>
      </div>
      {/* Exercises by Equipment */}
      <div className='my-4 '>
        <h2 className='mb-3 text-4xl font-semibold'>Exercises by Equipment</h2>
        {/* <div className='flex flex-wrap gap-2'> */}
        <div className='flex flex-wrap gap-2'>
          {equipmentListData.map((equipment) => (
            <Link
              key={`target-${equipment}`}
              // variant='outline'
              href={`/exercises/equipments/${equipment}`}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'capitalize',
                'max-sm:h-10 max-sm:rounded-md max-sm:px-8',
              )}
            >
              {equipment.replaceAll('-', ' ')}
            </Link>
          ))}
        </div>
      </div>
      <Separator className='my-4' />
      <ExercisesGroup exercises={data} />
    </section>
  );
};

export default ExercisesPage;
