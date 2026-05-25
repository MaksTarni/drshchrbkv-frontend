import { SkeletonItem } from '../../shared/components/atoms/skeleton-item';
import { useDimensions } from '../../shared/hooks/dimensions';

export const SkeletonBlock = () => {
  const { isDesktop } = useDimensions();

  return (
    <div className='h-dvh'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-s-mobile tablet:gap-s-not-mobile items-end justify-end p-s-mobile tablet:p-s-not-mobile h-[calc(50%+36px)]'>
        <SkeletonItem
          count={4}
          width='100%'
          height={`${isDesktop ? '40px' : '20px'}`}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-s-mobile tablet:gap-s-not-mobile items-end p-s-mobile tablet:p-s-not-mobile h-[calc(50%-36px)]'>
        <SkeletonItem
          count={4}
          width='100%'
          height={`${isDesktop ? '40px' : '20px'}`}
        />
      </div>
    </div>
  );
};
