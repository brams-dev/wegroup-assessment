import { Formik } from 'formik';
import Form from '../form/Form/Form';
import TextField from '../form/Field/TextField';
import SelectField from '../form/Field/SelectField';
import Submit from '../form/Submit/Submit';
import { User, UserFormValues } from '~/types';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import z from 'zod';

const roleOptions = [
  { label: 'User', value: 'User' },
  { label: 'Admin', value: 'Admin' },
];

const validationSchema = z.object({
  name: z.string(),
  email: z.email(),
  role: z.enum(['User', 'Admin']),
});

type Props = {
  initialValues: Omit<User, 'id'>;
  handleSubmit: (values: Omit<User, 'id'>) => void;
  isInitialValid?: boolean;
  submit?: React.ReactNode;
};

export default function UserForm({ initialValues, handleSubmit, isInitialValid, submit }: Props) {
  return (
    <Formik<UserFormValues>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={toFormikValidationSchema(validationSchema)}
      isInitialValid={isInitialValid ?? false}
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <Form handleSubmit={handleSubmit}>
          <TextField name='name' type='text' label='Name' />

          <TextField name='email' type='email' label='Email' />

          <SelectField name='role' label='Role' options={roleOptions} />

          <Submit>{submit ? submit : 'Submit'}</Submit>
        </Form>
      )}
    </Formik>
  );
}
