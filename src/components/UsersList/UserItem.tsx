import { User } from '~/types';
import { cn } from '~/utils';

export default function UserItem({ name, email, role }: User) {
  return (
    <li className='flex flex-col border-b-neutral-200 px-4 py-4 not-last:border-b'>
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
    </li>
  );
}
