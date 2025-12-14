import ReactQueryProvider from './ReactQueryProvider';
import { PropsWithChildren } from 'react';

export default function AppProviders({ children }: PropsWithChildren) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
