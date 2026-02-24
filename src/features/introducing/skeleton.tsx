import { SkeletonItem } from '../../shared/components/atoms/skeleton-item';
import { useDimensions } from '../../shared/hooks/dimensions';

export const SkeletonBlock = () => {
  const { isMobile } = useDimensions();

  return (
    <div className='h-dvh'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5  items-end p-5 h-[50%]'>
        <SkeletonItem
          count={3}
          width={isMobile ? '100%' : '70%'}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5  items-end p-5 h-[50%]'>
        <SkeletonItem
          count={3}
          width={isMobile ? '100%' : '70%'}
        />
      </div>
    </div>
  );
};
