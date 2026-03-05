import { useMemo } from 'react';
import { EmexSellerHubIntroducing } from './emex-seller-hub-introducing';
import { mapDataToUI } from './utils';
import { useEmexSellerHubIntro } from '../../entities/emex-seller-hub-intro';
import { resolvedImagesByDimensions } from './utils/resolved-images-by-dimensions';
import { resolveImageByBreakpoint } from '../../shared/utils';
import { useDimensions } from '../../shared/hooks/dimensions';

export const EmexSellerHubIntroducingConnector = () => {
  const { isMobile, isTablet, isDesktop } = useDimensions();

  const { data, isLoading } = useEmexSellerHubIntro();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  const resolvedImage = resolveImageByBreakpoint({
    defaultImage: screenData.image,
    mobileImage: screenData.mobileImage,
    tabletImage: screenData.tabletImage,
    breakpoints: { isMobile, isTablet, isDesktop },
  });

  if (isLoading) {
    return null;
  }

  return (
    <EmexSellerHubIntroducing
      screenData={screenData}
      image={resolvedImage}
    />
  );
};
