import { format } from 'date-fns';

import { ExerciseActivity } from '@/types/raw';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<ExerciseActivity>[] = [
  {
    accessorKey: 'exerciseId',
    header: 'Exercise ID',
    accessorFn: (row) => `${row.exerciseId.padStart(4, '0').slice(-4)}`,
  },
  {
    accessorKey: 'reps',
    header: 'Reps',
    accessorFn: (row) => `${row.reps ?? '-'}`,
  },
  {
    accessorKey: 'weight',
    header: 'Weight',
    accessorFn: (row) => `${row.weight ?? '-'}`,
  },
  {
    accessorKey: 'weightUnit',
    header: 'Weight unit',
    accessorFn: (row) => `${row.weightUnit ?? '-'}`,
  },
  {
    accessorKey: 'distance',
    header: 'Distance',
    accessorFn: (row) => `${row.distance ?? '-'}`,
  },
  {
    accessorKey: 'distanceUnit',
    header: 'Distance unit',
    accessorFn: (row) => `${row.distanceUnit ?? '-'}`,
  },
  {
    accessorKey: 'duration',
    header: 'Duration (HH:MM:SS)',
    accessorFn: (row) => `${row.duration ?? '-'}`,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    accessorFn: (row) => `${format(new Date(row.date), 'ccc, PPpp')}`,
    // header: () => <div className='mr-10 px-0 text-right'>Date</div>,
    // cell: ({ row }) => {
    //   const date = new Date(row.getValue('date'));
    //   const formatted = format(date, 'ccc, PPpp');
    //   return <div className='mr-10 text-right'>{formatted}</div>;
    // },
  },
];
