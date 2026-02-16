import { useMemo } from 'react';
import { useHero } from '../../entities/hero';
import { Introducing } from './introducing';
import { mapDataToUI } from './utils';

type Props = {
  accentColor: string;
};

export const IntroducingConnector = ({ accentColor }: Props) => {
  const { data } = useHero();

  const mappedData = useMemo(() => mapDataToUI(data), [data]);

  return (
    <Introducing
      accentColor={accentColor}
      screenData={mappedData}
    />
  );
};
