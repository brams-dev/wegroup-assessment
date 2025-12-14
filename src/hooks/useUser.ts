import { useQuery } from '@tanstack/react-query';
import { User } from '~/types';

type Options = {
  enabled?: boolean;
};

const getUser = async (id: number): Promise<User> => {
  if (!Number.isFinite(id)) throw new Error('Invalid id');

  const result = await fetch(`${import.meta.env.VITE_API_BASE}/users/${id}`);
  const data = await result.json();

  if (Object.keys(data).length === 0) throw new Error('not found');

  return data;
};

export default function useUser(id: number, options?: Options) {
  return useQuery({
    ...options,
    queryKey: ['users', id],
    queryFn: () => getUser(id),
    retry: false,
  });
}
