import useUsers from '../../hooks/useUsers';
import UserItem from './UserItem';
import UsersListSkeleton from './UsersListSkeleton';

export default function UsersList() {
  const { data: users, isLoading } = useUsers();

  return (
    <ul className='flex flex-col gap-4'>
      {isLoading && <UsersListSkeleton />}

      {!isLoading && users?.map((user) => <UserItem {...user} />)}
    </ul>
  );
}
