import { useQuery } from 'react-query';
import api from '../../shared/api/client';
import { QUERY_KEYS } from '../query-keys';
import type { TCraftItems } from './types';

export const useCraftItems = () => {
  return useQuery<TCraftItems>({
    queryKey: [QUERY_KEYS.craftItems],
    queryFn: async () => {
      const response = await api.get(
        '/api/craft-items?sort=order:asc&populate=*',
      );
      return response.data;
    },
  });
};
