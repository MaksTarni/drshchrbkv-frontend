import { useQuery } from 'react-query';
import type { TEmexSellerHubPointsData } from './types';
import { QUERY_KEYS } from '../query-keys';
import { api } from '../../shared/api';

export const useEmexSellerHubPoints = () => {
  return useQuery<TEmexSellerHubPointsData[]>({
    queryKey: [QUERY_KEYS.emexSellerHubPoints],
    queryFn: async () => {
      const response = await api.get(
        '/api/project-pages/seller-hub/by-slug/emex-seller-hub',
      );
      return response.data;
    },
  });
};
