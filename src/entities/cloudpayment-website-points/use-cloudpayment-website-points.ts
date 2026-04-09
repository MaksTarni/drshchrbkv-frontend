import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TCloudpaymentWebsitePointsData } from './types';

import { MOCK_CLOUDPAYMENT_WEBSITE_POINTS } from './__mocks__';

export const useCloudpaymentWebsitePoints = () => {
  return useQuery<TCloudpaymentWebsitePointsData[]>({
    queryKey: [QUERY_KEYS.cloudpaymentWebsitePoints],
    queryFn: async () => {
      return MOCK_CLOUDPAYMENT_WEBSITE_POINTS;
    },
  });
};
