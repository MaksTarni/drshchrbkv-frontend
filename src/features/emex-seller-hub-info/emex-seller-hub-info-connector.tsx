import { useMemo } from 'react';
import { mapDataToUI } from './utils';
import { EmexSellerHubInfo } from './emex-seller-hub-info';
import { useEmexSellerHubPoints } from '../../entities/emex-seller-hub-points';

export const EmexSellerHubInfoConnector = () => {
  const { data, isLoading } = useEmexSellerHubPoints();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <EmexSellerHubInfo screenData={screenData} />;
};
