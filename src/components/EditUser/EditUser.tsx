import { useParams } from 'react-router';
import EditUserForm from './EditUserForm';
import Header from './Header';
import useUser from '~/hooks/useUser';
import LoadingPage from '~/components/LoadingPage/LoadingPage';
import NotFoundPage from '~/components/NotFoundPage/NotFoundPage';

type Params = {
  id: string;
};

export default function EditUser() {
  const { id } = useParams<Params>();

  const idNumber = Number(id);
  const isInvalidId = !Number.isInteger(idNumber);

  const { data: user, isLoading } = useUser(idNumber, { enabled: !isInvalidId });

  if (isInvalidId) return <NotFoundPage />;
  if (isLoading) return <LoadingPage />;
  if (!user) return <NotFoundPage />;

  return (
    <div className='flex flex-col gap-6'>
      <Header name={user.name} />

      <EditUserForm user={user} />
    </div>
  );
}
