'use client';

import { Exercise } from '@/types/raw';
import ExerciseCard from '@/components/exerciseCard';

type Props = {
  exercises: Exercise[];
};

const ExercisesGroup = ({ exercises }: Props) => {
  return (
    <div>
      <div className='exercises__exercises-wrapper'>
        {exercises.map((item) => (
          // <p key={`${item.name}-${item.id}`}>{item.id} - {item.name}</p>
          <ExerciseCard
            key={`${item.name}-${item.id}`}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ExercisesGroup;
