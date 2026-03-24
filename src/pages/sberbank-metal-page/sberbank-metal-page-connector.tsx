import { useNavigate } from 'react-router-dom';
import { useSiteSettings } from '../../entities/site-settings';
import { useMemo } from 'react';
import { mapSiteSettings } from './utils';
import { SberbankMetalPage } from './sberbank-metal-page';

export const SberbankMetalPageConnector = () => {
  const navigate = useNavigate();

  const { data } = useSiteSettings();

  const screenData = useMemo(() => mapSiteSettings(data), [data]);

  const handleHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <SberbankMetalPage
      screenData={screenData}
      onHome={handleHome}
    />
  );
};
