import { useMemo } from 'react';
import { SberbankDepositIntroducing } from './sberbank-deposit-introducing';
import { mapDataToUI } from './utils';
import { useSberbankDepositIntro } from '../../entities/sberbank-deposit-intro';

export const SberbankDepositIntroducingConnector = () => {
  const { data, isLoading } = useSberbankDepositIntro();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <SberbankDepositIntroducing screenData={screenData} />;
};
