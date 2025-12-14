import { useContext } from 'react';
import OverviewContext from './context';

export default function useOverview() {
  const context = useContext(OverviewContext);

  if (!context) throw new Error('Must be wrapped in <OverviewProvider />');

  return context;
}
