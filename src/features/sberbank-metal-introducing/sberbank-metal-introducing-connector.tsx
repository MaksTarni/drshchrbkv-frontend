import { useMemo } from 'react';
import { SberbankMetalIntroducing } from './sberbank-metal-introducing';
import { useSberbankMetalIntro } from '../../entities/sberbank-metal-intro';
import { mapDataToUI } from './utils';
import { resolveImageByBreakpoint } from '../../shared/utils';
import { useDimensions } from '../../shared/hooks/dimensions';

export const SberbankMetalIntroducingConnector = () => {
  const breakpoints = useDimensions();
  const { data, isLoading } = useSberbankMetalIntro();

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
    <SberbankMetalIntroducing
      screenData={screenData}
      image={resolvedImage}
    />
  );
};
