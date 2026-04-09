import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TCloudpaymentWebsiteIntroData } from './types';
import { MOCK_CLOUDPAYMENT_WEBSITE_INTRO } from './__mocks__';

export const useCloudpaymentWebsiteIntro = () => {
  return useQuery<TCloudpaymentWebsiteIntroData>({
    queryKey: [QUERY_KEYS.cloudpaymentWebsiteIntro],
    queryFn: async () => {
      return MOCK_CLOUDPAYMENT_WEBSITE_INTRO;
    },
  });
};
