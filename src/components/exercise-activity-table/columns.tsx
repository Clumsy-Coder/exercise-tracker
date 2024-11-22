import { format } from 'date-fns';

import { ExerciseActivity } from '@/types/raw';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from './column-header';

// https://tanstack.com/table/latest/docs/api/core/column-def#columndef-apis

export const columns: ColumnDef<ExerciseActivity>[] = [
  {
    accessorKey: 'exerciseId',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title='Exercise ID'
        />
      );
    },
    accessorFn: (row) => `${row.exerciseId.padStart(4, '0').slice(-4)}`,
    meta: {
      headerTitle: 'Exercise ID',
    },
  },
  {
    accessorKey: 'reps',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title='Reps'
        />
      );
    },
    accessorFn: (row) => `${row.reps ?? '-'}`,
  },
  {
    accessorKey: 'weight',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title='Weight'
        />
      );
    },
    accessorFn: (row) => `${row.weight ?? '-'}`,
  },
  {
    accessorKey: 'weightUnit',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title='Weight Unit'
        />
      );
    },
    accessorFn: (row) => `${row.weightUnit ?? '-'}`,
    meta: {
      headerTitle: 'Weight Unit',
    },
  },
  {
    accessorKey: 'distance',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title='Distance'
        />
      );
    },
    accessorFn: (row) => `${row.distance ?? '-'}`,
  },
  {
    accessorKey: 'distanceUnit',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title='Distance Unit'
        />
      );
    },
    accessorFn: (row) => `${row.distanceUnit ?? '-'}`,
    meta: {
      headerTitle: 'Distance Unit',
    },
  },
  {
    accessorKey: 'duration',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title='Duration (HH:MM:SS)'
        />
      );
    },
    accessorFn: (row) => `${row.duration ?? '-'}`,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title='Date'
        />
      );
    },
    accessorFn: (row) => `${format(new Date(row.date), 'ccc, PPpp')}`,
    cell: ({ row }) => `${format(new Date(row.getValue('date')), 'ccc, PPpp')}`,
    // header: () => <div className='mr-10 px-0 text-right'>Date</div>,
    // cell: ({ row }) => {
    //   const date = new Date(row.getValue('date'));
    //   const formatted = format(date, 'ccc, PPpp');
    //   return <div className='mr-10 text-right'>{formatted}</div>;
    // },
    //
    // sortingFn: 'datetime',
    // sort by date
    // obtained from
    // - https://stackoverflow.com/a/18246278/3053548
    // - https://tanstack.com/table/v8/docs/guide/sorting#sorting-fns
    sortingFn: (rowA, rowB) =>
      new Date(rowA.original.date).getTime() - new Date(rowB.original.date).getTime(),
  },
];
