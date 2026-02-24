import { useMemo } from 'react';
import { useEmexIntro } from '../../entities/emex-intro/use-emex-intro';
import { ProjectIntroducing } from './project-introducing';
import { mapDataToUI } from './utils';

export const ProjectIntroducingConnector = () => {
  const { data, isLoading } = useEmexIntro();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <ProjectIntroducing screenData={screenData} />;
};
