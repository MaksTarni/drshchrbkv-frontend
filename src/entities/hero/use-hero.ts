import { useQuery } from 'react-query';
import api from '../../shared/api/client';
import { QUERY_KEYS } from '../query-keys';
import type { THero } from './types';

export const useHero = () => {
  return useQuery<THero>({
    queryKey: [QUERY_KEYS.hero],
    queryFn: async () => {
      const response = await api.get('/api/hero');
      return response.data;
    },
  });
};
