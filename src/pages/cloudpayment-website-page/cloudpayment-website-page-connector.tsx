import { useNavigate } from 'react-router-dom';
import { useSiteSettings } from '../../entities/site-settings';
import { useMemo } from 'react';
import { mapSiteSettings } from './utils';
import { CloudpaymentWebsitePage } from './cloudpayment-website-page';

export const CloudpaymentWebsitePageConnector = () => {
  const navigate = useNavigate();

  const { data } = useSiteSettings();

  const screenData = useMemo(() => mapSiteSettings(data), [data]);

  const handleHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <CloudpaymentWebsitePage
      screenData={screenData}
      onHome={handleHome}
    />
  );
};
