import Header from './Header';
import UsersList from '~/components/UsersList/UsersList';
import OverviewSort from './OverviewSort';
import OverviewProvider from '~/providers/OverviewProvider/OverviewProvider';
import { Button } from '~/components/ui/button';
import { Link } from 'react-router';
import { UserPlusIcon } from 'lucide-react';

export default function UsersOverview() {
  return (
    <OverviewProvider>
      <div className='flex flex-col gap-6'>
        <Header />

        <div className='flex justify-between'>
          <OverviewSort />

          <Button asChild>
            <Link to='/new' className='flex items-center gap-2'>
              <UserPlusIcon />
              Create user
            </Link>
          </Button>
        </div>

        <UsersList />
      </div>
    </OverviewProvider>
  );
}
