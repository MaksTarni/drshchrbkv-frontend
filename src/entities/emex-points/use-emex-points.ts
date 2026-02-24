import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import { api } from '../../shared/api';
import type { TEmexPointsData } from './types';

export const useEmexPoints = () => {
  return useQuery<TEmexPointsData[]>({
    queryKey: [QUERY_KEYS.emexPoints],
    queryFn: async () => {
      const response = await api.get('/api/project-pages/by-slug/emex-group');
      return response.data;
    },
  });
};
