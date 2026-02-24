import { useMemo } from 'react';
import { useHero } from '../../entities/hero';
import { Introducing } from './introducing';
import { mapDataToUI } from './utils';
import { SkeletonBlock } from './skeleton';

type Props = {
  accentColor: string;
};

export const IntroducingConnector = ({ accentColor }: Props) => {
  const { data, isLoading } = useHero();

  const mappedData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return <SkeletonBlock />;
  }

  return (
    <Introducing
      accentColor={accentColor}
      screenData={mappedData}
    />
  );
};
