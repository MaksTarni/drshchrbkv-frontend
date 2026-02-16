import { useMemo } from 'react';
import { useSiteSettings } from '../../entities/site-settings';
import { MainPage } from './main-page';
import { mapSiteSettings } from './utils';

export const MainPageConnector = () => {
  const { data } = useSiteSettings();

  const mappedData = useMemo(() => mapSiteSettings(data), [data]);

  return <MainPage screenData={mappedData} />;
};
