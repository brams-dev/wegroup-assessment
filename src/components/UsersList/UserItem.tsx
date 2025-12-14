import { User } from '~/types';
import { cn } from '~/utils';
import { Button } from '~/components/ui/button';
import { PencilIcon } from 'lucide-react';
import { Link } from 'react-router';
import DeleteButton from './DeleteButton';

export default function UserItem({ id, name, email, role }: User) {
  return (
    <li className='group flex items-center justify-between border-b-neutral-200 px-4 py-4 not-last:border-b'>
      <div className='flex flex-col'>
        <div className='flex items-center gap-2'>
          <span className='font-semibold text-neutral-950'>{name}</span>

          <span
            className={cn('rounded-lg px-1.5 py-0.5 text-[10px] font-bold uppercase', {
              ['bg-red-300 text-red-700']: role === 'Admin',
              ['bg-green-300 text-green-700']: role === 'User',
            })}
          >
            {role}
          </span>
        </div>

        <span className='text-sm text-neutral-500'>{email}</span>
      </div>

      <div className='hidden gap-2 group-hover:flex pointer-coarse:flex'>
        <Button variant='secondary' size='icon-sm'>
          <Link to={`${id}/edit`}>
            <PencilIcon />
          </Link>
        </Button>

        <DeleteButton id={id} />
      </div>
    </li>
  );
}
