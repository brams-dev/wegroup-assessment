import useDeleteUser from '~/hooks/useDeleteUser';
import { Button } from '~/components/ui/button';
import { Loader2Icon, Trash2Icon } from 'lucide-react';

type Props = {
  id: number;
};

export default function DeleteButton({ id }: Props) {
  const { mutateAsync, isPending } = useDeleteUser();

  const handleDelete = () => mutateAsync(id);

  return (
    <Button variant='destructive' size='icon-sm' disabled={isPending} onClick={handleDelete}>
      {isPending ? <Loader2Icon className='animate-spin' /> : <Trash2Icon />}
    </Button>
  );
}
