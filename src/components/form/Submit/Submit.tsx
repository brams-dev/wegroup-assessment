import { useFormikContext } from 'formik';
import { Loader2Icon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Button } from '~/components/ui/button';
import { CreateUserFormValues } from '~/types';
import { cn } from '~/utils';

export default function Submit({ children }: PropsWithChildren) {
  const { isSubmitting, isValid } = useFormikContext<CreateUserFormValues>();

  const isDisabled = isSubmitting || !isValid;

  return (
    <Button
      type='submit'
      disabled={isDisabled}
      className='relative flex items-center justify-center'
    >
      <span className={cn('flex items-center gap-2', { ['invisible']: isSubmitting })}>
        {children}
      </span>

      {isSubmitting && (
        <span className='absolute flex items-center gap-2'>
          <Loader2Icon className='animate-spin' />
          Loading
        </span>
      )}
    </Button>
  );
}
