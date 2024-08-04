import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const HomePageLoading = () => {
  return (
    <div className='container mb-8 flex flex-col gap-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <Skeleton className='h-12 w-[30rem]' />
        <Skeleton className='h-10 w-[10.5rem]' />
      </div>
      <Separator />
      <Skeleton className='h-12 w-96' />
      {/* displayed in smaller screens */}
      <div className='flex flex-row items-center gap-8 overflow-x-scroll pb-3 md:hidden'>
        {[...Array(6)].map((_, i) => (
          <Skeleton
            // eslint-disable-next-line react/no-array-index-key
            key={`home-page-loading-exercise-card-${i}`}
            className='h-[482px] w-[20rem] min-w-[20rem] max-w-[20rem]'
          />
        ))}
      </div>
      {/* displayed in larger screens */}
      <div className='hidden w-full grid-cols-1 gap-8 pt-2 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {[...Array(6)].map((_, i) => (
          <Skeleton
            // eslint-disable-next-line react/no-array-index-key
            key={`home-page-loading-exercise-card-${i}`}
            className='h-[482px] min-w-[308px]'
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageLoading;
