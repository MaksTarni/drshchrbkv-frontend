import { useEffect, useMemo } from 'react';
import { useSiteSettings } from '../../entities/site-settings';
import { MainPage } from './main-page';
import { mapSiteSettings } from './utils';
import { useAuth } from '../../shared/process/context';

export const MainPageConnector = () => {
  const { isAuthorized, setIsAuthorized } = useAuth();

  const { data, isLoading } = useSiteSettings();

  const mappedData = useMemo(() => mapSiteSettings(data), [data]);

  useEffect(() => {
    if (!isAuthorized) {
      return;
    }

    setIsAuthorized(false);
  }, [isAuthorized, setIsAuthorized]);

  return (
    <>
      <MainPage
        screenData={mappedData}
        isLoading={isLoading}
      />
    </>
  );
};
