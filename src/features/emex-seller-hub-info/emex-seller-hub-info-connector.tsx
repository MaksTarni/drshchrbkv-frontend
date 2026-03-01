import { useMemo } from 'react';
import { mapDataToUI } from './utils';
import { EmexSellerHubInfo } from './emex-seller-hub-info';
import { useEmexSellerHubPoints } from '../../entities/emex-seller-hub-points';

export const EmexSellerHubInfoConnector = () => {
  const test = useEmexSellerHubPoints();

  const screenData = useMemo(() => mapDataToUI(test), [test]);

  console.log(screenData);

  //   if (isLoading) {
  //     return null;
  //   }

  return <EmexSellerHubInfo screenData={screenData} />;
};
