import { useNavigate } from 'react-router';
import UserForm from '../UserForm/UserForm';
import { User, UserFormValues } from '~/types';
import useEditUser from '~/hooks/useEditUser';
import { PencilIcon } from 'lucide-react';

type Props = {
  user: User;
};

export default function EditUserForm({ user }: Props) {
  const navigate = useNavigate();
  const { mutateAsync } = useEditUser();

  const handleSubmit = (values: UserFormValues) =>
    mutateAsync(
      { id: user.id, values },
      {
        onSuccess: () => navigate('/'),
      },
    );

  return (
    <UserForm
      handleSubmit={handleSubmit}
      initialValues={user}
      submit={
        <>
          <PencilIcon />
          Update user
        </>
      }
    />
  );
}
