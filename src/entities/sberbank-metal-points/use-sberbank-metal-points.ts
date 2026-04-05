import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import { api } from '../../shared/api';
import type { TSberbankMetalPointsData } from './types';

export const useSberbankMetalPoints = () => {
  return useQuery<TSberbankMetalPointsData[]>({
    queryKey: [QUERY_KEYS.sberbankMetalPoints],
    queryFn: async () => {
      const response = await api.get('/api/project-pages/metal/by-slug/metal');

      return response.data;
    },
  });
};
