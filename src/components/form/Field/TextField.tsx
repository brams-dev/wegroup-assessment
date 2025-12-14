import { Input } from '~/components/ui/input';
import Field from './Field';
import { useField } from 'formik';

type Props = {
  name: string;
  type: 'text' | 'email';
  label: string;
  description?: string;
  placeholder?: string;
};

export default function TextField({ name, type, placeholder, ...props }: Props) {
  const [{ value, onChange, onBlur }] = useField(name);

  return (
    <Field name={name} {...props}>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Field>
  );
}
