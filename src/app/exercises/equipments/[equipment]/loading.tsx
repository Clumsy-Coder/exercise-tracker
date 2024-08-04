import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const EquipmentExercisesPageLoading = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Skeleton className='h-12 w-80' />
      <Separator className='my-4 hidden lg:flex' />
      {/* Exercise card */}
      <div className='mt-3 flex flex-col items-center justify-between gap-1'>
        <Skeleton className='h-10 w-[40rem]' />
        <div className='my-9 grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          <Skeleton className='h-[483px] w-full' />
          <Skeleton className='h-[483px] w-full' />
          <Skeleton className='h-[483px] w-full' />
        </div>
        <div className='mb-8 flex justify-center gap-8'>
          <Skeleton className='h-10 w-24' />
          <Skeleton className='h-10 w-24' />
        </div>
      </div>
    </div>
  );
};

export default EquipmentExercisesPageLoading;
