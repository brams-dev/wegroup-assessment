export type User = {
  id: number;
  name: string;
  email: string;
  role: 'User' | 'Admin';
};

export type UserFormValues = {
  name: string;
  email: string;
  role: 'User' | 'Admin';
};
