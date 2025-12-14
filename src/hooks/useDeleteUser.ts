import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const result = await fetch(`${import.meta.env.VITE_API_BASE}/users/${id}`, {
        method: 'DELETE',
      });

      return result.json();
    },
    onSuccess: (_data, id: number) => {
      queryClient.invalidateQueries({ queryKey: ['users', 'list'] });
      queryClient.removeQueries({ queryKey: ['users', id] });
    },
  });
}
