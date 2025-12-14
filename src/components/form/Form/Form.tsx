import { FormEvent, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
}>;

export default function Form({ handleSubmit, children }: Props) {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-start gap-4'>
      {children}
    </form>
  );
}
