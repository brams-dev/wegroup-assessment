import { createContext, PropsWithChildren, useContext } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router';

type Overview = {
  sort: string;
  handleSort: (value: string) => void;
};

export const OverviewContext = createContext<Overview | null>(null);

export default function OverviewProvider({ children }: PropsWithChildren) {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') ?? '-name';

  const navigate = useNavigate();

  const handleSort = (value: string) => {
    navigate({
      search: createSearchParams({
        sort: value,
      }).toString(),
    });
  };

  return (
    <OverviewContext.Provider value={{ sort, handleSort }}>{children}</OverviewContext.Provider>
  );
}

export function useOverview() {
  const context = useContext(OverviewContext);

  if (!context) throw new Error('Must be wrapped in <OverviewProvider />');

  return context;
}
