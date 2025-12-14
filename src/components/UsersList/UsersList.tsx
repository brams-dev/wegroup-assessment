import { Loader2Icon } from 'lucide-react';
import { useOverview } from '~/providers/OverviewProvider/OverviewProvider';
import useUsers from '~/hooks/useUsers';
import UserItem from './UserItem';
import UsersListSkeleton from './UsersListSkeleton';

export default function UsersList() {
  const { sort } = useOverview();
  const { data: users, isLoading, isFetching } = useUsers({ sort });

  return (
    <div className='flex flex-col items-center gap-2'>
      <ul className='flex w-full flex-col overflow-hidden rounded-lg border border-neutral-200'>
        {isLoading && <UsersListSkeleton />}

        {!isLoading && users?.map((user) => <UserItem key={user.id} {...user} />)}
      </ul>

      {!isLoading && isFetching && (
        <div className='flex items-center gap-2 text-sm text-neutral-400'>
          <Loader2Icon className='animate-spin' size={14} />
          Refreshing stale data...
        </div>
      )}
    </div>
  );
}
