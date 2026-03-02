import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import { api } from '../../shared/api';
import type { TEmexSellerHubIntroData } from './types';

export const useEmexSellerHubIntro = () => {
  return useQuery<TEmexSellerHubIntroData>({
    queryKey: [QUERY_KEYS.emexSellerHubIntro],
    queryFn: async () => {
      const response = await api.get(
        '/api/project-pages/intro/by-slug/emex-seller-hub',
      );
      return response.data;
    },
  });
};
