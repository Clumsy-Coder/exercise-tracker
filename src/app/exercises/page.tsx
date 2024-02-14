'use client';

import Link from 'next/link';

import ExercisesGroup from '@/components/exercisesGroup';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useFetchAllExercises, useFetchEquipmentList, useFetchTargetList } from '@/hooks';
import { cn } from '@/lib/utils';

type ExercisesAccordionType = {
  /**
   * Data returned when fetching from `/api/exercises/targets`
   */
  exercisesByTarget: string[];
  /**
   * Data returned when fetching from `/api/exercises/equipments`
   */
  exercisesByEquipment: string[];
};
/**
 * Render exercises by target and equipment using an Accordion
 *
 * Usage
 * ```typescriptreact
 *    <ExercisesAccordion
 *      exercisesByTarget={targetListData}
 *      exercisesByEquipment={equipmentListData}
 *    >
 * ```
 */
const ExercisesAccordion = ({
  exercisesByTarget,
  exercisesByEquipment,
}: ExercisesAccordionType) => (
  <Accordion
    type='multiple'
    className='w-full'
  >
    {/* Exercises by target */}
    <AccordionItem value='exercises-by-target'>
      <AccordionTrigger>
        <h2 className='mb-3 text-4xl font-semibold'>Exercises by Target</h2>
      </AccordionTrigger>
      <AccordionContent>
        <div className=''>
          {/* <h2 className='mb-3 text-4xl font-semibold'>Exercises by Target</h2> */}
          {/* <div className='flex flex-wrap gap-2'> */}
          <div className='flex flex-wrap gap-2'>
            {exercisesByTarget.map((target) => (
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
      </AccordionContent>
    </AccordionItem>
    {/* Exercises by Equipment */}
    <AccordionItem value='exercises-by-equipment'>
      <AccordionTrigger>
        <h2 className='mb-3 text-4xl font-semibold'>Exercises by Equipment</h2>
      </AccordionTrigger>
      <AccordionContent>
        <div className=''>
          {/* <h2 className='mb-3 text-4xl font-semibold'>Exercises by Equipment</h2> */}
          {/* <div className='flex flex-wrap gap-2'> */}
          <div className='flex flex-wrap gap-2'>
            {exercisesByEquipment.map((equipment) => (
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
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// --------------------------------------------------------------------------------------------- //

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
      {/* Display Exercises by target and equipment using Shadcn Accordion in smaller screens */}
      <div className='flex lg:hidden'>
        <ExercisesAccordion
          exercisesByTarget={targetListData}
          exercisesByEquipment={equipmentListData}
        />
      </div>
      {/* Display Exercises by target and equipment in larger screens */}
      <div className='hidden lg:flex lg:flex-col'>
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
      </div>
      <Separator className='my-4 hidden lg:flex ' />
      <ExercisesGroup exercises={data} />
    </section>
  );
};

export default ExercisesPage;

