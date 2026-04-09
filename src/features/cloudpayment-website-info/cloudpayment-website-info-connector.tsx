import { useMemo } from 'react';
import { CloudpaymentWebsiteInfo } from './cloudpayment-website-info';
import { mapDataToUI } from './utils';
import { useCloudpaymentWebsitePoints } from '../../entities/cloudpayment-website-points';

export const CloudpaymentWebsiteInfoConnector = () => {
  const { data, isLoading } = useCloudpaymentWebsitePoints();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <CloudpaymentWebsiteInfo screenData={screenData} />;
};
