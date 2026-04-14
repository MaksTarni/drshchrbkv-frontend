import { Box } from '../../shared/components/atoms/box';
import { SkeletonItem } from '../../shared/components/atoms/skeleton-item';
import { useDimensions } from '../../shared/hooks/dimensions';
import {
  S_MOBILE,
  S_NOT_MOBILE,
  XXL_MOBILE,
  XXL_NOT_MOBILE,
} from '../../shared/indents';
import { SkeletonCloudpayment } from './layouts/cloudpayment/skeletons';
import { SkeletonEmex } from './layouts/emex/skeletons';
import { SkeletonSberbank } from './layouts/sberbank/skeletons';

export const Skeleton = () => {
  const { isMobile, isTablet, isDesktop } = useDimensions();

  return (
    <div className='gap-s-mobile tablet:gap-s-not-mobile'>
      <Box height={isMobile ? XXL_MOBILE : XXL_NOT_MOBILE} />

      <SkeletonItem
        height={20}
        width={isMobile ? '100%' : 267}
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />
      <Box height={isMobile ? 28 : 84} />
      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <SkeletonItem
        height={isDesktop ? 40 : 20}
        width={isMobile ? '100%' : isTablet ? 354 : 547}
      />

      <Box height={7} />

      <SkeletonItem
        height={isMobile ? 40 : 20}
        width={isMobile ? '100%' : 456}
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <SkeletonItem
        height={isDesktop ? 600 : isTablet ? 500 : 280}
        width='100%'
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <SkeletonItem
        height={20}
        width={isMobile ? '100%' : 136}
      />

      <SkeletonEmex />

      <SkeletonSberbank />

      <SkeletonCloudpayment />
    </div>
  );
};
