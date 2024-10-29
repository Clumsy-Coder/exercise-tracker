import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { exerciseEntry as exerciseEntrySchema, exerciseIdSchema as schema } from '@/schema';
import { Exercise } from '@/types/raw';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

type Props = {
  data: Exercise;
  // onSubmit: (formData: z.infer<typeof exerciseEntrySchema>) => void;
};

const AddExerciseEntry = ({ data }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const form = useForm<z.infer<typeof exerciseEntrySchema>>({
    resolver: zodResolver(exerciseEntrySchema),
    defaultValues: {
      exerciseId: +data.id,
      date: new Date(),
      // reps: 0,
      // weight: 0,
      // weightUnit: 'lbs',
      // distance: 0,
      // distanceUnit: 'km',
    },
    // mode: 'all',
  });

  const onSubmit = (values: z.infer<typeof exerciseEntrySchema>) => {
    console.log('form values', values);
  };

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onOpenChange={() => {
          form.reset();
          setDialogOpen(!dialogOpen);
        }}
      >
        <DialogTrigger asChild>
          <Button
            size='lg'
            className='text-md h-12 flex-auto font-bold md:flex-none'
          >
            Add Entry
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[500px]'>
          <DialogHeader>
            <DialogTitle>Add entry</DialogTitle>
            <DialogDescription>
              Add exercise entry for <span className='font-bold capitalize'>{data.name}</span>
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-4 py-4'
            >
              {/* ----------------------------------------------------------------------------- */}
              {/* Exercise name */}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label
                  htmlFor='exercise-name'
                  className='text-right'
                >
                  Exercise
                </Label>
                <p
                  id='exercise-name'
                  className='col-span-3 w-full capitalize'
                >
                  {data.name}
                </p>
              </div>
              {/* ----------------------------------------------------------------------------- */}
              {/* Exercise ID */}
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label
                  htmlFor='exercise-id'
                  className='text-right'
                >
                  ID
                </Label>
                <p
                  id='exercise-id'
                  className='col-span-3 w-full capitalize'
                >
                  {data.id}
                </p>
              </div>
              {/* ----------------------------------------------------------------------------- */}
              {/* Exercise date and time */}

              <FormField
                control={form.control}
                name='date'
                render={({ field }) => (
                  <FormItem className='grid grid-cols-4 items-center gap-x-4'>
                    <FormLabel className='text-right'>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant='outline'
                            className={cn(
                              // 'w-[240px] pl-3 text-left font-normal',
                              'col-span-3 pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className='w-auto p-0'
                        align='start'
                      >
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                          //
                          // unable to open the calender when `initialFocus` is set to true
                          // check:
                          // - https://github.com/shadcn-ui/ui/issues/332#issuecomment-1559767895
                          // initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {/* <FormDescription>Date and time of the exercise</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator />
              {/* ----------------------------------------------------------------------------- */}
              {/* Exercise reps */}
              <div>
                <FormField
                  control={form.control}
                  name='reps'
                  render={({ field }) => (
                    <FormItem className='grid grid-cols-4 items-center gap-x-4'>
                      <FormLabel className='text-right'>Reps</FormLabel>
                      <FormControl>
                        <Input
                          // placeholder='exercise reps'
                          type='number'
                          min={0}
                          className='col-span-3 !mt-0'
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage className='col-span-3 col-start-2 mt-3' />
                    </FormItem>
                  )}
                />
              </div>
              {/* ----------------------------------------------------------------------------- */}
              {/* Exercise weight */}
              <div className='grid grid-cols-4 items-center gap-2'>
                {/* weight label and weight input */}
                <div className='col-span-3'>
                  <FormField
                    control={form.control}
                    name='weight'
                    render={({ field }) => (
                      <FormItem className='grid grid-cols-3 grid-rows-1 items-center gap-4'>
                        {/* <FormItem className='grid grid-cols-4 items-center gap-2'> */}
                        <FormLabel className='text-right'>Weight</FormLabel>
                        <FormControl>
                          <Input
                            // placeholder='exercise weight'
                            type='number'
                            className='col-span-2 !mt-0 w-full'
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>This is your public display name.</FormDescription> */}
                        {/* <FormMessage className='col-span-3 col-start-2' /> */}
                      </FormItem>
                    )}
                  />
                </div>
                {/* weight unit */}
                <div className='grid-rows-2'>
                  <FormField
                    control={form.control}
                    name='weightUnit'
                    render={({ field }) => (
                      <FormItem className=''>
                        {/* <FormItem className='grid grid-cols-4 items-center gap-2'> */}
                        {/* <FormLabel className='text-right'>Weight unit</FormLabel> */}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                              // placeholder='Weight Unit'
                              />
                              {/* <SelectValue placeholder='lbs or kg' /> */}
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='lbs'>lbs</SelectItem>
                            <SelectItem value='kg'>kg</SelectItem>
                          </SelectContent>
                        </Select>
                        {/* <FormDescription>This is your public display name.</FormDescription> */}
                        {/* <FormMessage className='' /> */}
                      </FormItem>
                    )}
                  />
                </div>
                {/* weight error message */}
                <div className='col-span-3 col-start-2'>
                  {/* weight error message */}
                  <FormField
                    control={form.control}
                    name='weight'
                    render={() => (
                      <FormItem>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* weight unit error message */}
                  <FormField
                    control={form.control}
                    name='weightUnit'
                    render={() => (
                      <FormItem>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Separator />
              {/* ----------------------------------------------------------------------------- */}
              {/* Exercise distance */}
              <div className='grid grid-cols-4 items-center gap-2'>
                {/* distance label and distance input */}
                <div className='col-span-3'>
                  <FormField
                    control={form.control}
                    name='distance'
                    render={({ field }) => (
                      <FormItem className='grid grid-cols-3 grid-rows-1 items-center gap-4'>
                        {/* <FormItem className='grid grid-cols-4 items-center gap-2'> */}
                        <FormLabel className='text-right'>Distance</FormLabel>
                        <FormControl>
                          <Input
                            // placeholder='exercise distance'
                            type='number'
                            className='col-span-2 !mt-0 w-full'
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>This is your public display name.</FormDescription> */}
                        {/* <FormMessage className='col-span-3 col-start-2' /> */}
                      </FormItem>
                    )}
                  />
                </div>
                {/* distance unit */}
                <div className='grid-rows-2'>
                  <FormField
                    control={form.control}
                    name='distanceUnit'
                    render={({ field }) => (
                      <FormItem className=''>
                        {/* <FormItem className='grid grid-cols-4 items-center gap-2'> */}
                        {/* <FormLabel className='text-right'>Weight unit</FormLabel> */}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                              // placeholder='Weight Unit'
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='km'>km</SelectItem>
                            <SelectItem value='mile'>mile</SelectItem>
                          </SelectContent>
                        </Select>
                        {/* <FormDescription>This is your public display name.</FormDescription> */}
                        {/* <FormMessage className='' /> */}
                      </FormItem>
                    )}
                  />
                </div>
                {/* distance error message */}
                <div className='col-span-3 col-start-2'>
                  {/* distance error message */}
                  <FormField
                    control={form.control}
                    name='distance'
                    render={() => (
                      <FormItem>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* distance unit error message */}
                  <FormField
                    control={form.control}
                    name='distanceUnit'
                    render={() => (
                      <FormItem>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Separator />
              {/* ----------------------------------------------------------------------------- */}
              {/* Duration */}
              <div>
                <FormField
                  control={form.control}
                  name='duration'
                  render={({ field }) => (
                    <FormItem className='grid grid-cols-4 items-center gap-x-4'>
                      <FormLabel className='text-right'>Duration</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='HH:MM:SS'
                          className='col-span-3 !mt-0'
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage className='col-span-3 col-start-2 mt-3' />
                    </FormItem>
                  )}
                />
              </div>
              {/* ----------------------------------------------------------------------------- */}
              {/* Submit button */}
              <DialogFooter>
                <Button type='submit'>Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddExerciseEntry;
