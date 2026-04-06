import { useQuery } from 'react-query';
import type { TAboutData } from './types';
import { QUERY_KEYS } from '../query-keys';
import { api } from '../../shared/api';

export const useGetAbout = () => {
  return useQuery<TAboutData>({
    queryKey: [QUERY_KEYS.about],
    queryFn: async () => {
      const res = await api.get('/api/about');

      return res.data;
    },
    useErrorBoundary: true,
  });
};
