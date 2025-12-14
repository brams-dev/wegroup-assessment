import { useQuery } from '@tanstack/react-query';
import { User } from '~/types';

type Options = {
  sort: string;
};

const getUsers = async ({ sort }: Options): Promise<User[]> => {
  const result = await fetch(`${import.meta.env.VITE_API_BASE}/users?_sort=${sort}`);
  const data = await result.json();

  return data;
};

export default function useUsers({ sort }: Options) {
  return useQuery({
    queryKey: ['users', 'list', sort],
    queryFn: () => getUsers({ sort }),
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
