import { useField } from 'formik';
import { PropsWithChildren } from 'react';
import {
  FieldDescription,
  FieldError,
  FieldLabel,
  Field as ShadcnField,
} from '~/components/ui/field';

type Props = PropsWithChildren<{
  name: string;
  label: string;
  description?: string;
}>;

export default function Field({ name, label, description, children }: Props) {
  const [_field, { error, touched }] = useField(name);

  return (
    <ShadcnField className='max-w-96'>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>

      {description && <FieldDescription>{description}</FieldDescription>}

      {children}

      {touched && error && <FieldError>{error}</FieldError>}
    </ShadcnField>
  );
}
