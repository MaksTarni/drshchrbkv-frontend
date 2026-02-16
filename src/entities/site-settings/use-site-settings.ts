import { useQuery } from 'react-query';
import api from '../../shared/api/client';
import { QUERY_KEYS } from '../query-keys';
import type { TSiteSettings } from './types';

export const useSiteSettings = () => {
  return useQuery<TSiteSettings>({
    queryKey: [QUERY_KEYS.siteSettings],
    queryFn: async () => {
      const response = await api.get('/api/site-setting');
      return response.data;
    },
  });
};
