import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TSberbankDepositIntroData } from './types';

import { MOCK_SBERBANK_DEPOSIT_INTRO } from './__mocks__';

export const useSberbankDepositIntro = () => {
  return useQuery<TSberbankDepositIntroData>({
    queryKey: [QUERY_KEYS.sberbankDepositIntro],
    queryFn: async () => {
      return MOCK_SBERBANK_DEPOSIT_INTRO;
    },
  });
};
