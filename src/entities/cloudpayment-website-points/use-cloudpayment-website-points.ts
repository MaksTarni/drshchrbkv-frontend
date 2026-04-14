import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TCloudpaymentWebsitePointsData } from './types';

import { api } from '../../shared/api';

export const useCloudpaymentWebsitePoints = () => {
  return useQuery<TCloudpaymentWebsitePointsData[]>({
    queryKey: [QUERY_KEYS.cloudpaymentWebsitePoints],
    queryFn: async () => {
      const res = await api.get(
        '/api/project-pages/seller-hub/by-slug/cloudpayments',
      );

      return res.data;
    },
  });
};
