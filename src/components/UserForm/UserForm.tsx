import { Formik } from 'formik';
import Form from '../form/Form/Form';
import TextField from '../form/Field/TextField';
import SelectField from '../form/Field/SelectField';
import Submit from '../form/Submit/Submit';
import { UserFormValues } from '~/types';
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
  initialValues: UserFormValues;
  handleSubmit: (values: UserFormValues) => void;
  submit?: React.ReactNode;
};

export default function UserForm({ initialValues, handleSubmit, submit }: Props) {
  return (
    <Formik<UserFormValues>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={toFormikValidationSchema(validationSchema)}
      validateOnMount
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
