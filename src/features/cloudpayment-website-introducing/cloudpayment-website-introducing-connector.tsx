import { useMemo } from 'react';
import { CloudpaymentWebsiteIntroducing } from './cloudpayment-website-introducing';
import { mapDataToUI } from './utils';
import { useCloudpaymentWebsiteIntro } from '../../entities/cloudpayment-website-intro';

export const CloudpaymentWebsiteIntroducingConnector = () => {
  const { data, isLoading } = useCloudpaymentWebsiteIntro();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <CloudpaymentWebsiteIntroducing screenData={screenData} />;
};
