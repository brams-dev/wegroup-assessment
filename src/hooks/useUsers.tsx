import { useQuery } from '@tanstack/react-query';
import { User } from '../types';

const getUsers = async (): Promise<User[]> => {
  const result = await fetch('http://localhost:3001/users');
  const data = await result.json();

  return data;
};

export default function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
}
