import { PropsWithChildren } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router';
import OverviewContext from './context';

const DEFAULT_SORT = '-name';

export default function OverviewProvider({ children }: PropsWithChildren) {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') ?? DEFAULT_SORT;

  const navigate = useNavigate();

  const handleSort = (value: string) => {
    const search = createSearchParams({
      sort: value,
    }).toString();

    navigate({
      search: value !== DEFAULT_SORT ? search : '',
    });
  };

  return (
    <OverviewContext.Provider value={{ sort, handleSort }}>{children}</OverviewContext.Provider>
  );
}
