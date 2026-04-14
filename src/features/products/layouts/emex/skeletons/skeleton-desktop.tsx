import { SkeletonItem } from '../../../../../shared/components/atoms/skeleton-item';

export const SkeletonDesktop = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-2 gap-s-not-mobile'>
      <div className='flex justify-end'>
        <SkeletonItem
          height={20}
          width={147}
        />
      </div>

      <div className='col-start-2 row-start-1'>
        <SkeletonItem
          height={334}
          width='100%'
        />
      </div>

      <div className='col-start-2 row-start-2 flex justify-end'>
        <SkeletonItem
          height={20}
          width={147}
        />
      </div>

      <div className='col-start-3 col-span-2 row-start-1 row-span-2'>
        <SkeletonItem
          height={690}
          width='100%'
        />
      </div>
    </div>
  );
};
