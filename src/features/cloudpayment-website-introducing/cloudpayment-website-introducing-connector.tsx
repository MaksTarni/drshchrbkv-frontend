import { useMemo } from 'react';
import { CloudpaymentWebsiteIntroducing } from './cloudpayment-website-introducing';
import { mapDataToUI } from './utils';
import { useCloudpaymentWebsiteIntro } from '../../entities/cloudpayment-website-intro';
import { resolveImageByBreakpoint } from '../../shared/utils';
import { useDimensions } from '../../shared/hooks/dimensions';

export const CloudpaymentWebsiteIntroducingConnector = () => {
  const breakpoints = useDimensions();
  const { data, isLoading } = useCloudpaymentWebsiteIntro();

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
    <CloudpaymentWebsiteIntroducing
      screenData={screenData}
      image={resolvedImage}
    />
  );
};
