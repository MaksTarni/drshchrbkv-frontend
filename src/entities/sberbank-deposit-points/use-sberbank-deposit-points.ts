import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TSberbankDepositPointsData } from './types';
import { api } from '../../shared/api';

export const useSberbankDepositPoints = () => {
  return useQuery<TSberbankDepositPointsData[]>({
    queryKey: [QUERY_KEYS.sberbankDepositPoints],
    queryFn: async () => {
      const res = await api.get(
        '/api/project-pages/seller-hub/by-slug/sberbank-deposit',
      );

      return res.data;
    },
  });
};
