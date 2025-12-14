import { BrowserRouter } from 'react-router';
import ReactQueryProvider from './ReactQueryProvider';
import { PropsWithChildren } from 'react';

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </BrowserRouter>
  );
}
