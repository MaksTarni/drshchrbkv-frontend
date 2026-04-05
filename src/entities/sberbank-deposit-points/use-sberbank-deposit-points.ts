import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TSberbankDepositPointsData } from './types';
import { MOCK_SBERBANK_DEPOSIT_POINTS } from './__mocks__';

export const useSberbankDepositPoints = () => {
  return useQuery<TSberbankDepositPointsData[]>({
    queryKey: [QUERY_KEYS.sberbankDepositPoints],
    queryFn: async () => {
      return MOCK_SBERBANK_DEPOSIT_POINTS;
    },
  });
};
