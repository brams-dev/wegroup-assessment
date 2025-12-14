import Header from './Header';
import UsersList from '../UsersList/UsersList';

export default function UsersOverview() {
  return (
    <div className='flex flex-col gap-6'>
      <Header />

      <UsersList />
    </div>
  );
}
