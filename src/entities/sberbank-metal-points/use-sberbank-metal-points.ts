import { useQuery } from 'react-query';
import type { TEmexSellerHubPointsData } from '../emex-seller-hub-points/types';
import { QUERY_KEYS } from '../query-keys';
import { api } from '../../shared/api';

export const useSberbankMetalPoints = () => {
  return useQuery<TEmexSellerHubPointsData[]>({
    queryKey: [QUERY_KEYS.sberbankMetalPoints],
    queryFn: async () => {
      const response = await api.get('/api/project-pages/metal/by-slug/metal');

      return response.data;
    },
  });
};
