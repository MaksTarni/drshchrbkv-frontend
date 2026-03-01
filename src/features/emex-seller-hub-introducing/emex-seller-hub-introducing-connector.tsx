import { useMemo } from 'react';
import { EmexSellerHubIntroducing } from './emex-seller-hub-introducing';
import { mapDataToUI } from './utils';
import { useEmexSellerHubIntro } from '../../entities/emex-seller-hub-intro';

export const EmexSellerHubIntroducingConnector = () => {
  const { data, isLoading } = useEmexSellerHubIntro();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <EmexSellerHubIntroducing screenData={screenData} />;
};
