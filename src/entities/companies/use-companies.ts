import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TCompanies } from './types';
import { api } from '../../shared/api';

export const useCompanies = () => {
  return useQuery<TCompanies[]>({
    queryKey: [QUERY_KEYS.companies],
    queryFn: async () => {
      const response = await api.get('/api/companies');
      return response.data;
    },
  });
};
