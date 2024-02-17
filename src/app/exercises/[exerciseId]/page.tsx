'use client';

import { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import ExerciseIdPageLoading from '@/app/exercises/[exerciseId]/loading';
import Error from '@/components/error';
import { badgeVariants } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useFetchExercise } from '@/hooks';
import { cn } from '@/lib/utils';
import { exerciseIdSchema as schema } from '@/schema';
import { z } from 'zod';

type Props = {
  params: z.infer<typeof schema>;
};

const ExerciseIdPage = ({ params }: Props) => {
  const { isPending, data, isError, error } = useFetchExercise(params.exerciseId);

  if (isPending) {
    return <ExerciseIdPageLoading />;
  }

  if (isError) {
    type ErrorMessage = {
      message: string;
    };

    const status = (error as AxiosError<ErrorMessage>).response?.status;
    const message = (error as AxiosError<ErrorMessage>).response?.data.message;

    return (
      <Error
        status={status as number}
        message={message}
      />
    );
  }

  // used for rendering exercise properties and providing their links
  // alternative to manually writing code to display the exercise properties
  const exerciseProperties = [
    ['Body part: ', data.bodyPart, `/exercises/body-part/${data.bodyPart.replaceAll(' ', '-')}`],
    ['Equipment: ', data.equipment, `/exercises/equipments/${data.equipment.replaceAll(' ', '-')}`],
    ['Target: ', data.target, `/exercises/targets/${data.target.replaceAll(' ', '-')}`],
  ];

  return (
    <section className='mb-5 flex flex-col gap-5'>
      <h1 className='text-5xl font-bold capitalize'>{data.name}</h1>
      <div className='mt-4 grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
        <div>
          <Card>
            <CardContent className='relative my-3 h-96 w-full md:h-[40rem]'>
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={data.gifUrl}
                    alt={`${data.name}-gif`}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    loading='lazy'
                    className='object-contain'
                  />
                </DialogTrigger>
                <DialogContent className='h-[50vh] rounded-xl md:h-[90vh]'>
                  <DialogHeader>
                    {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                    <DialogDescription>
                      <Image
                        src={data.gifUrl}
                        alt={`${data.name}-gif`}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        loading='lazy'
                        className='object-contain'
                      />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent className='flex flex-col gap-1.5 pt-6 capitalize'>
              {/* body part, equipment and target values */}
              {exerciseProperties.map(([name, value, href]) => (
                <div
                  key={`exercise-properties-${name}`}
                  className='flex items-center justify-between px-2 py-1 '
                >
                  <div className='text-xl font-semibold'>{name}</div>
                  {/* <div>{value}</div> */}
                  <Link
                    className={cn(badgeVariants({ variant: 'default' }), 'text-md')}
                    href={href}
                  >
                    {value}
                  </Link>
                </div>
              ))}
              {/* secondary muscles  */}
              <div className=' flex justify-between px-2 md:items-center '>
                <div className='whitespace-nowrap text-xl font-semibold'>Secondary muscles</div>
                <div className='mt-0.5 flex flex-wrap justify-end gap-2 divide-x divide-neutral-300 whitespace-nowrap dark:divide-neutral-700'>
                  {data.secondaryMuscles.map((item) => (
                    <span
                      key={`secondary-muscle-${item}`}
                      // variant='outline'
                      className='text-md inline-flex py-0.5 pl-2.5 font-semibold text-foreground'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator className='my-4' />
      {/* Exercise instructions */}
      <div className='flex flex-col gap-3'>
        <h2 className='mb-2 text-4xl font-semibold'>Instructions</h2>
        <ol className='list-decimal px-5 md:px-7'>
          {data.instructions.map((item, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={`exercise-instruction-${index}`}
              className='text-md md:text-2xl'
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
      {/* Similar target muscle exercises */}
      {/* Similar equipment exercises */}
      {/* Similar body part exercises */}
    </section>
  );
};

export default ExerciseIdPage;
