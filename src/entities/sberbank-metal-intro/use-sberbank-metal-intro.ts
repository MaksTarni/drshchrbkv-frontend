import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TSberbankMetalIntroData } from './types';
import { api } from '../../shared/api';

export const useSberbankMetalIntro = () => {
  return useQuery<TSberbankMetalIntroData>({
    queryKey: [QUERY_KEYS.sberbankMetalIntro],
    queryFn: async () => {
      const response = await api.get('/api/project-pages/intro/by-slug/metal');

      return response.data;
    },
  });
};
