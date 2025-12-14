import { useField } from 'formik';
import Field from './Field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

type Props = {
  name: string;
  label: string;
  description?: string;
  options: { label: string; value: string }[];
};

export default function SelectField({ name, label, description, options }: Props) {
  const [{ value, onChange, onBlur }] = useField<'User' | 'Admin'>(name);

  return (
    <Field name={name} label={label} description={description}>
      <Select value={value} onValueChange={onChange(name)}>
        <SelectTrigger onBlur={onBlur(name)}>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
