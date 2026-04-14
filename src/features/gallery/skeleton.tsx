import { Box } from '../../shared/components/atoms/box';
import { SkeletonItem } from '../../shared/components/atoms/skeleton-item';
import { useDimensions } from '../../shared/hooks/dimensions';
import {
  S_MOBILE,
  S_NOT_MOBILE,
  XXL_MOBILE,
  XXL_NOT_MOBILE,
} from '../../shared/indents';

export const Skeleton = () => {
  const { isMobile } = useDimensions();

  return (
    <div className='gap-s-mobile tablet:gap-s-not-mobile'>
      <Box height={isMobile ? XXL_MOBILE : XXL_NOT_MOBILE} />

      <SkeletonItem
        height={20}
        width={isMobile ? '100%' : 88}
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-s-mobile tablet:gap-s-not-mobile'>
        {Array.from({ length: 6 }).map(() => {
          return (
            <SkeletonItem
              height={335}
              width='100%'
            />
          );
        })}
      </div>
    </div>
  );
};
