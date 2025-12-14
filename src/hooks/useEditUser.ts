import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserFormValues } from '~/types';

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, values }: { id: number; values: UserFormValues }) => {
      const result = await fetch(`${import.meta.env.VITE_API_BASE}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      return result.json();
    },
    onSuccess: (data, { id }: { id: number; values: UserFormValues }) => {
      queryClient.invalidateQueries({ queryKey: ['users', 'list'] });
      queryClient.invalidateQueries({ queryKey: ['users', id] });

      console.log({ data });

      queryClient.setQueryData(['users', id], data);
    },
  });
}
