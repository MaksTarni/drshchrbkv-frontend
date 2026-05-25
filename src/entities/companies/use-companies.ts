import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TCompanies } from './types';
import { api } from '../../shared/api';

export const useCompanies = () => {
  return useQuery<TCompanies[]>({
    queryKey: [QUERY_KEYS.companies],
    queryFn: async () => {
      const response = await api.get(
        '/api/companies?sort=order:asc&pagination[pageSize]=10&populate[frameA][populate]=image&populate[frameB][populate]=image&populate[frameATablet][populate]=image&populate[frameBTablet][populate]=image&populate[frameAMobile][populate]=image&populate[frameBMobile][populate]=image',
      );
      return response.data;
    },
    useErrorBoundary: true,
  });
};
