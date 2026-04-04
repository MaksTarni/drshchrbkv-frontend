import { useQuery } from 'react-query';
import type { TAbout } from './types';
import { QUERY_KEYS } from '../query-keys';
import { ABOUT_MOCKS } from './__mocks__';

export const useGetAbout = () => {
  return useQuery<TAbout>({
    queryKey: [QUERY_KEYS.about],
    queryFn: async () => {
      return ABOUT_MOCKS;
    },
    useErrorBoundary: true,
  });
};
