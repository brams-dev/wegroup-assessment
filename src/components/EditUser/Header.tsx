import { MoveLeftIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';

type Props = {
  name: string;
};

export default function Header({ name }: Props) {
  return (
    <div className='flex flex-col items-start gap-4'>
      <Button asChild variant='ghost'>
        <Link to='/'>
          <MoveLeftIcon /> Back to overview
        </Link>
      </Button>

      <div>
        <h1 className='text-2xl'>{name}</h1>
        <p>Edit the details of the user.</p>
      </div>
    </div>
  );
}
