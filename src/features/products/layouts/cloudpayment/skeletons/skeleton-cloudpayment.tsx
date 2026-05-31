import { Box } from '../../../../../shared/components/atoms/box';
import { SkeletonItem } from '../../../../../shared/components/atoms/skeleton-item';
import { useDimensions, useXL } from '../../../../../shared/hooks/dimensions';
import { S_MOBILE, S_NOT_MOBILE } from '../../../../../shared/indents';
import { SkeletonDesktop } from './skeleton-desktop';
import { SkeletonMobile } from './skeleton-mobile';
import { SkeletonTablet } from './skeleton-tablet';

export const SkeletonCloudpayment = () => {
  const { isMobile, isTablet, isDesktop } = useDimensions();

  const xl = useXL();
  return (
    <>
      <Box height={xl} />

      <SkeletonItem
        height={isDesktop ? 40 : 20}
        width={isMobile ? '100%' : isTablet ? 146 : 247}
      />

      <Box height={7} />

      <SkeletonItem
        height={isMobile ? 40 : 20}
        width={isMobile ? '100%' : 415}
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      {isDesktop && <SkeletonDesktop />}

      {isTablet && <SkeletonTablet />}

      {isMobile && <SkeletonMobile />}
    </>
  );
};
