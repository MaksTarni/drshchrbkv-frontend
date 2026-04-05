import { useNavigate } from 'react-router-dom';
import { useSiteSettings } from '../../entities/site-settings';
import { useMemo } from 'react';
import { mapSiteSettings } from './utils';
import { SberbankDepositPage } from './sberbank-deposit-page';

export const SberbankDepositPageConnector = () => {
  const navigate = useNavigate();

  const { data } = useSiteSettings();

  const screenData = useMemo(() => mapSiteSettings(data), [data]);

  const handleHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <SberbankDepositPage
      screenData={screenData}
      onHome={handleHome}
    />
  );
};
