import { useNavigate } from 'react-router-dom';
import { EmexSellerHubPage } from './emex-seller-hub-page';
import { useSiteSettings } from '../../entities/site-settings';
import { useMemo } from 'react';
import { mapSiteSettings } from './utils';

export const EmexSellerHubPageConnector = () => {
  const navigate = useNavigate();

  const { data } = useSiteSettings();

  const screenData = useMemo(() => mapSiteSettings(data), [data]);

  const handleHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <EmexSellerHubPage
      screenData={screenData}
      onHome={handleHome}
    />
  );
};
