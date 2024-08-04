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
import ExercisesPageLoading from '@/app/exercises/loading';
import {
  useFetchAllExercises,
  useFetchBodyPartList,
  useFetchEquipmentList,
  useFetchTargetList,
} from '@/hooks';
import { cn } from '@/lib/utils';

type ExercisesByTargetType = {
  /**
   * Data returned from API
   * - `/api/exercises/targets`
   * - `/api/exercises/equipments`
   */
  data: string[];
  /**
   * Function to generate the link using the exercise type (target or equipment)
   */
  exerciseLinkFn: (arg0: string) => string;
};
/**
 * Render links to the exercises by type. Ex: exercise by target or equipment
 *
 * This component is used to prevent repeating code. Before it was manually creating links in 4 places. Prone to bugs
 * - Accordion `Exercises by Target`
 * - Accordion `Exercises by Equipment`
 * - `Exercises by Target`
 * - `Exercises by Equipment`
 *
 * Usage: Render links for exercises by target
 * ```typescriptreact
 *    <ExercisesBy
 *      data={targetListData}
 *      exerciseLinkFn={(target) => `/exercises/targets/${target}`}
 *    />
 *
 * ```
 */
const ExercisesBy = ({ data, exerciseLinkFn }: ExercisesByTargetType) => (
  <>
    {data.map((exerciseType) => (
      <Link
        key={`exerciseType-${exerciseType}`}
        // variant='outline'
        href={exerciseLinkFn(exerciseType)}
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'capitalize',
          'max-sm:h-10 max-sm:rounded-md max-sm:px-8',
        )}
      >
        {exerciseType.replaceAll('-', ' ')}
      </Link>
    ))}
  </>
);

// --------------------------------------------------------------------------------------------- //

type ExercisesAccordionType = {
  /**
   * Data returned when fetching from `/api/exercises/targets`
   */
  exercisesByTarget: string[];
  /**
   * Data returned when fetching from `/api/exercises/equipments`
   */
  exercisesByEquipment: string[];
  /**
   * Data returned when fetching from `/api/exercises/body-parts`
   */
  exercisesByBodyPart: string[];
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
  exercisesByBodyPart,
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
            <ExercisesBy
              data={exercisesByTarget}
              exerciseLinkFn={(target) => `/exercises/targets/${target}`}
            />
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
            <ExercisesBy
              data={exercisesByEquipment}
              exerciseLinkFn={(equipment) => `/exercises/equipments/${equipment}`}
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
    {/* Exercises by Body part */}
    <AccordionItem value='exercises-by-body-part'>
      <AccordionTrigger>
        <h2 className='mb-3 text-4xl font-semibold'>Exercises by Body part</h2>
      </AccordionTrigger>
      <AccordionContent>
        <div className=''>
          {/* <h2 className='mb-3 text-4xl font-semibold'>Exercises by Equipment</h2> */}
          {/* <div className='flex flex-wrap gap-2'> */}
          <div className='flex flex-wrap gap-2'>
            <ExercisesBy
              data={exercisesByBodyPart}
              exerciseLinkFn={(bodyPart) => `/exercises/body-parts/${bodyPart}`}
            />
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
  const { isPending: bodyPartListIsLoading, data: bodyPartListData } = useFetchBodyPartList();

  if (
    isLoading ||
    targetListIsLoading ||
    equipmentListIsLoading ||
    bodyPartListIsLoading ||
    !data ||
    !targetListData ||
    !equipmentListData
  ) {
    return <ExercisesPageLoading />;
  }

  return (
    <section className='flex flex-col gap-5'>
      <h1 className='text-5xl font-bold'>Exercises</h1>
      {/* Display Exercises by target and equipment using Shadcn Accordion in smaller screens */}
      <div className='flex lg:hidden'>
        <ExercisesAccordion
          exercisesByTarget={targetListData}
          exercisesByEquipment={equipmentListData}
          exercisesByBodyPart={bodyPartListData as string[]}
        />
      </div>
      {/* Display Exercises by target and equipment in larger screens */}
      <div className='hidden lg:flex lg:flex-col'>
        {/* Exercises by target */}
        <div className='my-4'>
          <h2 className='mb-3 text-4xl font-semibold'>Exercises by Target</h2>
          {/* <div className='flex flex-wrap gap-2'> */}
          <div className='flex flex-wrap gap-2'>
            <ExercisesBy
              data={targetListData}
              exerciseLinkFn={(target) => `/exercises/targets/${target}`}
            />
          </div>
        </div>
        {/* Exercises by Equipment */}
        <div className='my-4'>
          <h2 className='mb-3 text-4xl font-semibold'>Exercises by Equipment</h2>
          {/* <div className='flex flex-wrap gap-2'> */}
          <div className='flex flex-wrap gap-2'>
            <ExercisesBy
              data={equipmentListData}
              exerciseLinkFn={(equipment) => `/exercises/equipments/${equipment}`}
            />
          </div>
        </div>
        {/* Exercises by Body part */}
        <div className='my-4'>
          <h2 className='mb-3 text-4xl font-semibold'>Exercises by Body part</h2>
          {/* <div className='flex flex-wrap gap-2'> */}
          <div className='flex flex-wrap gap-2'>
            <ExercisesBy
              data={bodyPartListData as string[]}
              exerciseLinkFn={(bodyPart) => `/exercises/body-parts/${bodyPart}`}
            />
          </div>
        </div>
      </div>
      <Separator className='my-4 hidden lg:flex' />
      <ExercisesGroup exercises={data} />
    </section>
  );
};

export default ExercisesPage;
