import { useMemo } from 'react';
import { useSiteSettings } from '../../entities/site-settings';
import { StubPage } from './stub-page';
import { mapSiteSettings } from './utils';

export const StubPageConnector = () => {
  const { data } = useSiteSettings();

  const screenData = useMemo(() => mapSiteSettings(data), [data]);

  return (
    <StubPage
      accentColor={screenData?.accentColor}
      email={screenData?.contactEmail}
    />
  );
};
