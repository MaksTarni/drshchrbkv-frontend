import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { THero } from './types';
import { api } from '../../shared/api';

export const useHero = () => {
  return useQuery<THero>({
    queryKey: [QUERY_KEYS.hero],
    queryFn: async () => {
      const response = await api.get('/api/hero');
      return response.data;
    },
  });
};
