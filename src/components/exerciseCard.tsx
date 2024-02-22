import Image from 'next/image';
import Link from 'next/link';

import { Badge, badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Exercise } from '@/types/raw';

type Props = {
  data: Exercise;
};

/**
 * Component for displaying a single Exercise
 *
 * Display
 * - Exercise name
 * - Exercise equipment
 * - Exercise GIF
 * - Exercise target
 * - Secondary muscles
 */
const ExerciseCard = ({ data }: Props) => {
  const { id, name, gifUrl, target, equipment } = data;

  return (
    <Card className='transition ease-in-out hover:ring hover:ring-neutral-300'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <CardTitle className='truncate py-2 pb-0.5 capitalize'>{name}</CardTitle>
              </TooltipTrigger>
              <TooltipContent className='capitalize'>{name}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* Link to exercise */}
          <Button asChild>
            <Link href={`/exercises/${id}`}>View more</Link>
          </Button>
        </div>
        <CardDescription className='py-1 capitalize '>
          <Link
            href={`/exercises/equipments/${equipment.replaceAll(' ', '-')}`}
            className='hover:underline hover:underline-offset-4'
            // className='underline underline-offset-4 hover:text-primary'
          >
            {equipment}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className='relative my-3 h-72 w-full'>
        <Image
          src={`/exercise-gif/${id}.gif`}
          alt={`${name}-gif`}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          loading='lazy'
          className='object-contain'
        />
      </CardContent>
      <CardFooter className='flex gap-1.5 overflow-auto pt-1'>
        {/* <Badge className='capitalize'>{target}</Badge> */}
        <Link
          href={`/exercises/targets/${target.replaceAll(' ', '-')}`}
          className={cn(badgeVariants(), 'capitalize', 'whitespace-nowrap')}
        >
          {target}
        </Link>
        {data.secondaryMuscles.map((item) => (
          <Badge
            key={`${id}-secondary-${item}`}
            variant='secondary'
            className='whitespace-nowrap capitalize'
          >
            {item}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
