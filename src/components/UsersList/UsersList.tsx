import { Loader2Icon } from 'lucide-react';
import { useOverview } from '~/providers/OverviewProvider/OverviewProvider';
import useUsers from '~/hooks/useUsers';
import UserItem from './UserItem';
import UsersListSkeleton from './UsersListSkeleton';
import { cn } from '~/utils';

export default function UsersList() {
  const { sort } = useOverview();
  const { data: users, isLoading, isFetching } = useUsers({ sort });

  const isRefreshing = !isLoading && isFetching;

  return (
    <div className='flex flex-col items-center gap-2'>
      <ul
        className={cn('flex w-full flex-col overflow-hidden rounded-lg border border-neutral-200', {
          ['pointer-events-none opacity-25']: isRefreshing,
        })}
      >
        {isLoading && <UsersListSkeleton />}

        {!isLoading && users?.map((user) => <UserItem key={user.id} {...user} />)}
      </ul>

      {isRefreshing && (
        <div className='flex items-center gap-2 text-sm text-neutral-400'>
          <Loader2Icon className='animate-spin' size={14} />
          Refreshing stale data...
        </div>
      )}
    </div>
  );
}
