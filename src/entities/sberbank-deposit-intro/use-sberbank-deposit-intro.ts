import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TSberbankDepositIntroData } from './types';

import { api } from '../../shared/api';

export const useSberbankDepositIntro = () => {
  return useQuery<TSberbankDepositIntroData>({
    queryKey: [QUERY_KEYS.sberbankDepositIntro],
    queryFn: async () => {
      const res = await api.get('/api/project-pages/intro/by-slug/deposit');

      return res.data;
    },
  });
};
