import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import type { TCloudpaymentWebsiteIntroData } from './types';
import { api } from '../../shared/api';

export const useCloudpaymentWebsiteIntro = () => {
  return useQuery<TCloudpaymentWebsiteIntroData>({
    queryKey: [QUERY_KEYS.cloudpaymentWebsiteIntro],
    queryFn: async () => {
      const res = await api.get(
        '/api/project-pages/intro/by-slug/cloudpayments',
      );

      return res.data;
    },
  });
};
