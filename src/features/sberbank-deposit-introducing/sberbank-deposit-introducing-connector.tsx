import { useMemo } from 'react';
import { SberbankDepositIntroducing } from './sberbank-deposit-introducing';
import { mapDataToUI } from './utils';
import { useSberbankDepositIntro } from '../../entities/sberbank-deposit-intro';
import { resolveImageByBreakpoint } from '../../shared/utils';
import { useDimensions } from '../../shared/hooks/dimensions';

export const SberbankDepositIntroducingConnector = () => {
  const breakpoints = useDimensions();

  const { data, isLoading } = useSberbankDepositIntro();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  const resolvedImage = resolveImageByBreakpoint({
    defaultImage: screenData?.desktopImage,
    mobileImage: screenData.mobileImage,
    tabletImage: screenData.tabletImage,
    breakpoints,
  });

  if (isLoading) {
    return null;
  }

  return (
    <SberbankDepositIntroducing
      screenData={screenData}
      image={resolvedImage}
    />
  );
};
