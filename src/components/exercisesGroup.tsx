'use client';

import { useState } from 'react';

import ExerciseCard from '@/components/exerciseCard';
import { Button } from '@/components/ui/button';
import { Exercise } from '@/types/raw';
import { Input } from '@/components/ui/input';

type Props = {
  exercises: Exercise[];
};

const DEFAULT_SHOW_LIMIT = 6;
const SHOW_LIMIT_INCREMENT = 6;

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
      <div className='flex w-full items-center justify-center gap-5'>
        {/* Search exercises */}
        <Input
          type='search'
          placeholder='Search an exercise'
          onChange={(event) => {
            setSearchString(event.target.value);
            setShowLimit(DEFAULT_SHOW_LIMIT);
          }}
          value={searchStr}
          className='md:w-[40rem] '
        />
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
