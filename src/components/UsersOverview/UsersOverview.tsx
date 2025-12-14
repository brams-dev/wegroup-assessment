import Header from './Header';
import UsersList from '../UsersList/UsersList';
import OverviewSort from './OverviewSort';
import OverviewProvider from '~/providers/OverviewProvider/OverviewProvider';

export default function UsersOverview() {
  return (
    <OverviewProvider>
      <div className='flex flex-col gap-6'>
        <Header />

        <OverviewSort />

        <UsersList />
      </div>
    </OverviewProvider>
  );
}
