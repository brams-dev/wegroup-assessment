import { Formik } from 'formik';
import TextField from '~/components/form/Field/TextField';
import Form from '~/components/form/Form/Form';
import SelectField from '~/components/form/Field/SelectField';
import { CreateUserFormValues } from '~/types';
import Submit from '~/components/form/Submit/Submit';
import { UserPlusIcon } from 'lucide-react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import z from 'zod';
import useCreateUser from '~/hooks/useCreateUser';
import { useNavigate } from 'react-router';

const initialValues = { name: '', email: '', role: 'User' as const };

const roleOptions = [
  { label: 'User', value: 'User' },
  { label: 'Admin', value: 'Admin' },
];

const validationSchema = z.object({
  name: z.string(),
  email: z.email(),
  role: z.enum(['User', 'Admin']),
});

export default function CreateUserForm() {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateUser();

  const handleSubmit = (values: CreateUserFormValues) =>
    mutateAsync(values, {
      onSuccess: () => navigate('/'),
    });

  return (
    <Formik<CreateUserFormValues>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={toFormikValidationSchema(validationSchema)}
      isInitialValid={false}
    >
      {({ handleSubmit }) => (
        <Form handleSubmit={handleSubmit}>
          <TextField name='name' type='text' label='Name' />

          <TextField name='email' type='email' label='Email' />

          <SelectField name='role' label='Role' options={roleOptions} />

          <Submit>
            <UserPlusIcon />
            Create new user
          </Submit>
        </Form>
      )}
    </Formik>
  );
}
