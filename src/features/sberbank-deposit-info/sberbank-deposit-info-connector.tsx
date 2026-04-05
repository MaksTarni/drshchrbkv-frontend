import { useMemo } from 'react';
import { SberbankDepositInfo } from './sberbank-deposit-info';
import { mapDataToUI } from './utils';
import { useSberbankDepositPoints } from '../../entities/sberbank-deposit-points';

export const SberbankDepositInfoConnector = () => {
  const { data, isLoading } = useSberbankDepositPoints();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <SberbankDepositInfo screenData={screenData} />;
};
