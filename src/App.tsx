import { Route, Routes } from 'react-router';

import AppProviders from '~/components/AppProviders/AppProviders';
import UsersOverview from '~/components/UsersOverview/UsersOverview';
import CreateUser from '~/components/CreateUser/CreateUser';
import EditUser from './components/EditUser/EditUser';

const App = () => {
  return (
    <AppProviders>
      <main className='flex w-full justify-center'>
        <div className='w-full max-w-5xl p-4'>
          <Routes>
            <Route index element={<UsersOverview />} />
            <Route path='new' element={<CreateUser />} />
            <Route path=':id/edit' element={<EditUser />} />
          </Routes>
        </div>
      </main>
    </AppProviders>
  );
};

export default App;
