'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import ExerciseCard from '@/components/exerciseCard';
import { Button } from '@/components/ui/button';
import { Exercise } from '@/types/raw';
import { Input } from '@/components/ui/input';

type Props = {
  exercises: Exercise[];
};

const DEFAULT_SHOW_LIMIT = 6;
const SHOW_LIMIT_INCREMENT = 6;

/**
 * Component for displaying a group of exercise cards.
 * Has ability to
 * - search exercises
 *   - search by exercise name
 *   - search by equipment
 *   - search by target
 *   - search by secondary muscles
 * - use pagination (to prevent displaying all the exercises at once)
 *
 * Used in pages that display a group of exercises
 * Ex:
 * - all exercises
 * - leg exercises
 * - chest exercises
 * - cable machine exercises
 * - assisted exercises
 */
const ExercisesGroup = ({ exercises }: Props) => {
  // number of exercises to display at a time
  const [showLimit, setShowLimit] = useState(DEFAULT_SHOW_LIMIT);
  const [searchStr, setSearchString] = useState('');

  let exercisesToDisplay: Exercise[];

  if (searchStr) {
    exercisesToDisplay = exercises.filter((item) => {
      const searchStrLower = searchStr.toLowerCase();
      return (
        item.name.toLowerCase().replaceAll('-', ' ').includes(searchStrLower) ||
        item.target.toLowerCase().includes(searchStrLower) ||
        item.equipment.toLowerCase().includes(searchStrLower) ||
        item.secondaryMuscles.some((item) => item.toLowerCase().includes(searchStrLower))
      );
    });
  } else {
    exercisesToDisplay = exercises;
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full items-center justify-center gap-3 md:w-[40rem]'>
        {/* Search exercises with a clear button */}
        <div className='input-with-clear-button flex w-full justify-between'>
          <Input
            type='search'
            placeholder='Search an exercise'
            onChange={(event) => {
              setSearchString(event.target.value);
              setShowLimit(DEFAULT_SHOW_LIMIT);
            }}
            value={searchStr}
            className='border-0 shadow-none focus-visible:ring-0'
          />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => {
              setSearchString('');
              setShowLimit(DEFAULT_SHOW_LIMIT);
            }}
            className=''
          >
            <X className='h-4 w-4' />
          </Button>
        </div>
        {/* Display number of exercises displayed */}
        <p className='whitespace-nowrap text-neutral-500 dark:text-neutral-400'>
          {new Intl.NumberFormat('us').format(exercisesToDisplay.length).toString()} exercises
        </p>
      </div>
      <div className='exercises__exercises-wrapper'>
        {exercisesToDisplay.slice(0, showLimit).map((item) => (
          // <p key={`${item.name}-${item.id}`}>{item.id} - {item.name}</p>
          <ExerciseCard
            key={`${item.name}-${item.id}`}
            data={item}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className='mb-8 mt-8 flex justify-center gap-8'>
        <Button
          onClick={() => setShowLimit(showLimit + SHOW_LIMIT_INCREMENT)}
          disabled={showLimit >= exercisesToDisplay.length}
        >
          Show more
        </Button>
        <Button
          onClick={() => setShowLimit(exercisesToDisplay.length)}
          disabled={showLimit >= exercisesToDisplay.length}
        >
          Show all
        </Button>
      </div>
    </div>
  );
};

export default ExercisesGroup;
