import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import { SeparatorHorizontal } from 'lucide-react';
import { Column } from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

// obtained from
// - https://github.com/Clumsy-Coder/uva-uhunt/blob/9abf6a5/src/components/ui/data-table/column-header.tsx
// - https://github.com/shadcn-ui/ui/blob/805ed41/apps/www/app/(app)/examples/tasks/components/data-table-column-header.tsx

export const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='-ml-3 h-8 data-[state=open]:bg-accent'
          >
            <span>{title}</span>
            {(() => {
              if (column.getIsSorted() === 'desc') {
                return <ArrowDownIcon className='ml-2 h-4 w-4' />;
              }
              if (column.getIsSorted() === 'asc') {
                return <ArrowUpIcon className='ml-2 h-4 w-4' />;
              }
              return <CaretSortIcon className='ml-2 h-4 w-4' />;
            })()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
            Ascending
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
            Descending
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.clearSorting()}>
            <SeparatorHorizontal className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
            Default
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
            Hide Column
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
