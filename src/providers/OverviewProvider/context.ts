import { createContext } from 'react';

type Overview = {
  sort: string;
  handleSort: (value: string) => void;
};

const OverviewContext = createContext<Overview | null>(null);

export default OverviewContext;
