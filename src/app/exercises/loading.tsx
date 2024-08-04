import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const ExercisesPageLoading = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Skeleton className='h-12 w-80' />
      {/* Accordion */}
      <div className='flex flex-col lg:hidden'>
        <div className='my-4'>
          <Skeleton className='h-11 w-96' />
        </div>
        <Separator className='my-3' />
        <div className='my-4'>
          <Skeleton className='h-11 w-96' />
        </div>
        <Separator className='my-3' />
      </div>
      {/* Exercise target and equipment */}
      <div className='mt-6 hidden gap-4 lg:flex lg:flex-col'>
        <div className='flex flex-col gap-4'>
          <Skeleton className='h-7 w-96' />
          <Skeleton className='h-9 w-full' />
          <Skeleton className='h-9 w-full' />
        </div>
        <div className='mt-6 flex flex-col gap-4'>
          <Skeleton className='h-7 w-96' />
          <Skeleton className='h-9 w-full' />
          <Skeleton className='h-9 w-full' />
          <Skeleton className='h-9 w-full' />
        </div>
      </div>
      <Separator className='my-4 hidden lg:flex' />
      {/* Exercise card */}
      <div className='flex flex-col items-center justify-between gap-1'>
        <Skeleton className='h-10 w-[40rem]' />
        <div className='my-9 grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          <Skeleton className='h-[30rem] w-full' />
          <Skeleton className='h-[30rem] w-full' />
          <Skeleton className='h-[30rem] w-full' />
        </div>
      </div>
    </div>
  );
};

export default ExercisesPageLoading;
