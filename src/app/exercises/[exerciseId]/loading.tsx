import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const ExerciseIdPageLoading = () => {
  return (
    <div className='mb-5 flex flex-col gap-5'>
      <Skeleton className='h-11 w-96' />
      <div className='mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2'>
        <Skeleton className='my-1 h-[25.8rem] md:h-[41.7rem]' />
        <Skeleton className='my-1 h-[13.2rem] md:h-[13.6rem]' />
      </div>
      <Separator className='my-4' />
      <Skeleton className='h-[15.5rem]' />
    </div>
  );
};

export default ExerciseIdPageLoading;
