import { useOverview } from '~/providers/OverviewProvider/OverviewProvider';
import useUsers from '../../hooks/useUsers';
import UserItem from './UserItem';
import UsersListSkeleton from './UsersListSkeleton';

export default function UsersList() {
  const { sort } = useOverview();
  const { data: users, isLoading } = useUsers({ sort });

  return (
    <ul className='flex flex-col overflow-hidden rounded-lg border border-neutral-200'>
      {isLoading && <UsersListSkeleton />}

      {!isLoading && users?.map((user) => <UserItem key={user.id} {...user} />)}
    </ul>
  );
}
