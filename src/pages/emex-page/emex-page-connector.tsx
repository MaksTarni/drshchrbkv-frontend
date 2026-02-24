import { useMemo } from 'react';
import { useSiteSettings } from '../../entities/site-settings';
import { EmexPage } from './emex-page';
import { mapSiteSettings } from './utils';

export const EmexPageConnector = () => {
  const { data } = useSiteSettings();

  const screenData = useMemo(() => mapSiteSettings(data), [data]);

  return <EmexPage screenData={screenData} />;
};
