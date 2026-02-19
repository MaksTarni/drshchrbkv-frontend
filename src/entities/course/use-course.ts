import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../query-keys';
import type { TCourse } from './types';
import { api } from '../../shared/api';

export const useCourse = () => {
  return useQuery<TCourse>({
    queryKey: [QUERY_KEYS.courses],
    queryFn: async () => {
      const response = await api.get(
        '/api/course?populate[courseFrame][populate]=image',
      );
      return response.data;
    },
  });
};
