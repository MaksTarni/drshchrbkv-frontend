import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TCraftItems } from './types';
import { api } from '../../shared/api';

export const useCraftItems = () => {
  return useQuery<TCraftItems>({
    queryKey: [QUERY_KEYS.craftItems],
    queryFn: async () => {
      const response = await api.get(
        '/api/craft?populate[gallery][populate]=image',
      );
      return response.data;
    },
  });
};
