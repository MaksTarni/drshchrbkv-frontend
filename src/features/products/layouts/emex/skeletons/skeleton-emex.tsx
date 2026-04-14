import { Box } from '../../../../../shared/components/atoms/box';
import { SkeletonItem } from '../../../../../shared/components/atoms/skeleton-item';
import { useDimensions } from '../../../../../shared/hooks/dimensions';
import {
  S_MOBILE,
  S_NOT_MOBILE,
  XL_MOBILE,
  XL_NOT_MOBILE,
} from '../../../../../shared/indents';
import { SkeletonDesktop } from './skeleton-desktop';
import { SkeletonMobile } from './skeleton-mobile';
import { SkeletonTablet } from './skeleton-tablet';

export const SkeletonEmex = () => {
  const { isMobile, isTablet, isDesktop } = useDimensions();
  return (
    <>
      <Box height={isMobile ? XL_MOBILE : XL_NOT_MOBILE} />

      <SkeletonItem
        height={isDesktop ? 40 : 20}
        width={isMobile ? '100%' : isTablet ? 354 : 547}
      />

      <Box height={7} />

      <SkeletonItem
        height={isMobile ? 40 : 20}
        width={isMobile ? '100%' : isTablet ? 503 : 456}
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      {isDesktop && <SkeletonDesktop />}

      {isTablet && <SkeletonTablet />}

      {isMobile && <SkeletonMobile />}
    </>
  );
};
