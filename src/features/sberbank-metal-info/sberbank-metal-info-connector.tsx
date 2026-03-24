import { useMemo } from 'react';
import { useSberbankMetalPoints } from '../../entities/sberbank-metal-points';
import { SberbankMetalInfo } from './sberbank-metal-info';
import { mapDataToUI } from './utils';

export const SberbankMetalInfoConnector = () => {
  const { data, isLoading } = useSberbankMetalPoints();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <SberbankMetalInfo screenData={screenData} />;
};
