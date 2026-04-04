import { useNavigate } from 'react-router-dom';
import { AboutPage } from './about-page';
import { useSiteSettings } from '../../entities/site-settings';
import { useMemo } from 'react';
import { mapDataToUi, mapSiteSettings } from './utils';
import { useGetAbout } from '../../entities/about';

export const AboutPageConnector = () => {
  const navigate = useNavigate();

  const { data } = useSiteSettings();
  const { data: aboutData } = useGetAbout();

  const siteSettingsData = useMemo(() => mapSiteSettings(data), [data]);

  const screenData = useMemo(() => mapDataToUi(aboutData), [aboutData]);

  const handleHome = () => {
    navigate('/', { replace: true });
  };
  return (
    <AboutPage
      screenData={screenData}
      email={siteSettingsData?.email}
      onHome={handleHome}
    />
  );
};
