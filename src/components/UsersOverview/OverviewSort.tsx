import { ArrowDownAZIcon, ArrowUpAZIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import useOverview from '~/providers/OverviewProvider/useOverview';

type SortOption = {
  column: 'Name' | 'Role';
  direction: 'asc' | 'desc';
  value: string;
};

const SORT_OPTIONS: SortOption[] = [
  {
    column: 'Name',
    direction: 'desc',
    value: '-name',
  },
  {
    column: 'Name',
    direction: 'asc',
    value: 'name',
  },
  {
    column: 'Role',
    direction: 'desc',
    value: '-role',
  },
  {
    column: 'Role',
    direction: 'asc',
    value: 'role',
  },
];

export default function OverviewSort() {
  const { sort, handleSort } = useOverview();

  return (
    <Select value={sort} onValueChange={handleSort}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {SORT_OPTIONS.map(({ column, direction, value }) => (
          <SelectItem key={value} value={value} className='flex justify-between'>
            {column}
            {direction === 'desc' && <ArrowDownAZIcon className='text-neutral-900' />}
            {direction === 'asc' && <ArrowUpAZIcon className='text-neutral-900' />}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
