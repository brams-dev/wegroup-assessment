import { Route, Routes } from 'react-router';
import AppProviders from './components/AppProviders/AppProviders';
import UsersOverview from './components/UsersOverview/UsersOverview';

const App = () => {
  return (
    <AppProviders>
      <main className='flex w-full justify-center'>
        <div className='w-full max-w-5xl p-4'>
          <Routes>
            <Route index element={<UsersOverview />} />
          </Routes>
        </div>
      </main>
    </AppProviders>
  );
};

export default App;
