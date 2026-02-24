import { useMemo } from 'react';
import { useEmexPoints } from '../../entities/emex-points';
import { ProjectInfo } from './project-info';
import { mapDataToUI } from './utils';

export const ProjectInfoConnector = () => {
  const { data, isLoading } = useEmexPoints();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <ProjectInfo screenData={screenData} />;
};
