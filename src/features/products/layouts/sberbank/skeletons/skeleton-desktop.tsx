import { SkeletonItem } from '../../../../../shared/components/atoms/skeleton-item';

export const SkeletonDesktop = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-2 gap-s-not-mobile'>
      <div className='col-start-1 col-span-2 row-start-1 row-span-2'>
        <SkeletonItem
          height={690}
          width='100%'
        />
      </div>

      <div>
        <SkeletonItem
          height={20}
          width={237}
        />
      </div>

      <div className='col-start-3 row-start-2'>
        <SkeletonItem
          height={334}
          width='100%'
        />
      </div>

      <div className='col-start-4 row-start-2'>
        <SkeletonItem
          height={20}
          width={237}
        />
      </div>
    </div>
  );
};
