import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../query-keys';
import { api } from '../../shared/api';
import type { TEmexIntroData } from './types';

export const useEmexIntro = () => {
  return useQuery<TEmexIntroData>({
    queryKey: [QUERY_KEYS.emexIntro],
    queryFn: async () => {
      const response = await api.get(
        '/api/project-pages/intro/by-slug/emex-group',
      );
      return response.data;
    },
  });
};
