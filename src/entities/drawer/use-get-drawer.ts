import { useQuery } from 'react-query';
import type { TDrawer } from './types';
import { QUERY_KEYS } from '../query-keys';
import { DRAWER_MOCKS } from './__mocks__';

export const useGetDrawer = () => {
  return useQuery<TDrawer>({
    queryKey: [QUERY_KEYS.drawer],
    queryFn: async () => {
      return DRAWER_MOCKS;
    },
    useErrorBoundary: true,
  });
};
