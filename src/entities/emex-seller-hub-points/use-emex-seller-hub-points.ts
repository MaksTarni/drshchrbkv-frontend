import { EMEX_SELLER_HUB_POINTS } from './__mocks__';

export const useEmexSellerHubPoints = () => {
  return EMEX_SELLER_HUB_POINTS;
  //   return useQuery<TEmexSellerHubPointsData[]>({
  //     queryKey: [QUERY_KEYS.emexSellerHubPoints],
  //     queryFn: async () => {
  //       const response = await api.get('/api/project-pages/by-slug/emex-group');
  //       return response.data;
  //     },
  //   });
};
