import useCreateUser from '~/hooks/useCreateUser';
import { useNavigate } from 'react-router';
import UserForm from '../UserForm/UserForm';
import { UserFormValues } from '~/types';
import { UserPlusIcon } from 'lucide-react';

const initialValues = { name: '', email: '', role: 'User' as const };

export default function CreateUserForm() {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateUser();

  const handleSubmit = (values: UserFormValues) =>
    mutateAsync(values, {
      onSuccess: () => navigate('/'),
    });

  return (
    <UserForm
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      submit={
        <>
          <UserPlusIcon />
          Create new user
        </>
      }
    />
  );
}
