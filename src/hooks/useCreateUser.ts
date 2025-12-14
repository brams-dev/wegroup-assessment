import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateUserFormValues } from '~/types';

export default function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: CreateUserFormValues) => {
      const result = await fetch(`${import.meta.env.VITE_API_BASE}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = result.json();

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
