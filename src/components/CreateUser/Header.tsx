import { MoveLeftIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';

export default function Header() {
  return (
    <div className='flex flex-col items-start gap-4'>
      <Button asChild variant='ghost'>
        <Link to='/'>
          <MoveLeftIcon /> Back to overview
        </Link>
      </Button>

      <div>
        <h1 className='text-2xl'>Create a new user</h1>
        <p>Here you can create a new user, blah blah</p>
      </div>
    </div>
  );
}
