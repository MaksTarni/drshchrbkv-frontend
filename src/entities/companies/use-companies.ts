import { useQuery } from 'react-query';
import api from '../../shared/api/client';
import { QUERY_KEYS } from '../query-keys';
import type { TCompanies } from './types';

export const useCompanies = () => {
  return useQuery<TCompanies[]>({
    queryKey: [QUERY_KEYS.companies],
    queryFn: async () => {
      const response = await api.get(
        '/api/companies?sort=order:asc&populate[frameA][populate]=image&populate[frameB][populate]=image',
      );
      return response.data;
    },
  });
};
