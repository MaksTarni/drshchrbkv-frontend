import { useNavigate } from 'react-router-dom';
import { AboutPage } from './about-page';
import { useMemo } from 'react';
import { mapDataToUi } from './utils';
import { useGetAbout } from '../../entities/about';

export const AboutPageConnector = () => {
  const navigate = useNavigate();

  const { data: aboutData } = useGetAbout();

  const screenData = useMemo(() => mapDataToUi(aboutData), [aboutData]);

  const handleHome = () => {
    navigate('/', { replace: true });
  };
  return (
    <AboutPage
      screenData={screenData}
      onHome={handleHome}
    />
  );
};
