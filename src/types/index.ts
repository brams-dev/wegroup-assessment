export type User = {
  id: number;
  name: string;
  email: string;
  role: 'User' | 'Admin';
};

export type CreateUserFormValues = {
  name: string;
  email: string;
  role: 'User' | 'Admin';
};
