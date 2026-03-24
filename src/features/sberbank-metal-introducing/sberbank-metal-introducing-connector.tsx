import { useMemo } from 'react';
import { SberbankMetalIntroducing } from './sberbank-metal-introducing';
import { useSberbankMetalIntro } from '../../entities/sberbank-metal-intro';
import { mapDataToUI } from './utils';

export const SberbankMetalIntroducingConnector = () => {
  const { data, isLoading } = useSberbankMetalIntro();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <SberbankMetalIntroducing screenData={screenData} />;
};
