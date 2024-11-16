'use client';

import * as React from 'react';
import { Cross2Icon, MixerHorizontalIcon } from '@radix-ui/react-icons';
import {
  ColumnDef,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useFetchExerciseIdActivity } from '@/hooks';
import { Exercise, ExerciseActivity } from '@/types/raw';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  /**
   * Hide `Exercise Id` column. Default is `false`
   */
  hideExerciseId?: boolean;
  /**
   * Hide `Reps` column. Default is `false`
   */
  hideReps?: boolean;
  /**
   * Hide `Weight` column. Default is `false`
   */
  hideWeight?: boolean;
  /**
   * Hide `Weight Unit` column. Default is `false`
   */
  hideWeightUnit?: boolean;
  /**
   * Hide `Distance` column. Default is `false`
   */
  hideDistance?: boolean;
  /**
   * Hide `Distance Unit` column. Default is `false`
   */
  hideDistanceUnit?: boolean;
  /**
   * Hide `Duration` column. Default is `false`
   */
  hideDuration?: boolean;
  /**
   * Hide `Date` column. Default is `false`
   */
  hideDate?: boolean;
}

type Props = {
  data: ExerciseActivity[];
};

const ExerciseActivityTable = <TData, TValue>({
  columns,
  data,
  hideExerciseId,
  hideReps,
  hideWeight,
  hideWeightUnit,
  hideDistance,
  hideDistanceUnit,
  hideDuration,
  hideDate,
}: DataTableProps<TData, TValue>) => {
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
    ...(hideExerciseId ? { exerciseId: false } : undefined),
    ...(hideReps ? { reps: false } : undefined),
    ...(hideWeight ? { weight: false } : undefined),
    ...(hideWeightUnit ? { weightUnit: false } : undefined),
    ...(hideDistance ? { distance: false } : undefined),
    ...(hideDistanceUnit ? { distanceUnit: false } : undefined),
    ...(hideDuration ? { duration: false } : undefined),
    ...(hideDate ? { date: false } : undefined),
  });
  const [globalFilter, setGlobalFilter] = React.useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnVisibility,
      globalFilter,
    },
  });

  return (
    <div>
      <div className='flex items-center py-4'>
        <div className='flex items-center gap-4'>
          <Input
            placeholder='Filter any column'
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className='max-w-sm'
          />
          {globalFilter.length > 0 && (
            <Button
              variant='outline'
              onClick={() => setGlobalFilter('')}
              className='h-10 px-2 lg:px-3'
            >
              Reset
              <Cross2Icon className='ml-2 h-4 w-4' />
            </Button>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='outline'
              className='ml-auto'
            >
              <MixerHorizontalIcon className='mr-2 h-4 w-4' />
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className='capitalize'
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {
                      /*
                       * to use column.columnDef.meta.headerTitle , it needs to be set in the `columns.tsx`
                       * export const columns: ColumnDef<ExerciseActivity>[] = [
                       *  meta: {
                       *    headerTitle: "Weight Unit"
                       *  },
                       *  ... // other config
                       * ]
                       *
                       * code obtained from
                       * - https://github.com/Clumsy-Coder/uva-uhunt/commit/ae7cedc515d76ef34f79204a04fa32e842974413
                       */
                      (column.columnDef.meta as { headerTitle: string })?.headerTitle || column.id
                    }
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className='pl-5'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className='pl-5'
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ExerciseActivityTable;
