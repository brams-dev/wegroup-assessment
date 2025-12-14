import CreateUserForm from './CreateUserForm';
import Header from './Header';

export default function CreateUser() {
  return (
    <div className='flex flex-col gap-6'>
      <Header />

      <CreateUserForm />
    </div>
  );
}
