'use client';

import { useState } from 'react';

import ExerciseCard from '@/components/exerciseCard';
import { Button } from '@/components/ui/button';
import { Exercise } from '@/types/raw';

type Props = {
  exercises: Exercise[];
};

const DEFAULT_SHOW_LIMIT = 6;
const SHOW_LIMIT_INCREMENT = 6;

const ExercisesGroup = ({ exercises }: Props) => {
  // number of exercises to display at a time
  const [showLimit, setShowLimit] = useState(DEFAULT_SHOW_LIMIT);

  return (
    <div className='flex flex-col items-center'>
      <div className='exercises__exercises-wrapper'>
        {exercises.slice(0, showLimit).map((item) => (
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
          disabled={showLimit >= exercises.length}
        >
          Show more
        </Button>
        <Button
          onClick={() => setShowLimit(exercises.length)}
          disabled={showLimit >= exercises.length}
        >
          Show all
        </Button>
      </div>
    </div>
  );
};

export default ExercisesGroup;
