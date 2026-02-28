import { useMutation } from 'react-query';

import { api } from '../../shared/api';

export const useCheckPassword = () => {
  return useMutation({
    mutationFn: async (password: string) => {
      const response = await api.post('/fsd', { password });
      return response.data;
    },
    // useErrorBoundary: true,
  });
};
