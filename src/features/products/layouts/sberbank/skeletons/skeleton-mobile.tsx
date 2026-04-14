import { SkeletonItem } from '../../../../../shared/components/atoms/skeleton-item';

export const SkeletonMobile = () => {
  return (
    <div className='grid grid-cols-2 auto-rows-auto gap-s-mobile'>
      <div className='col-span-2'>
        <SkeletonItem
          height={20}
          width='100%'
        />
      </div>

      <div className='col-span-2'>
        <SkeletonItem
          height={280}
          width='100%'
        />
      </div>

      <div className='col-span-2'>
        <SkeletonItem
          height={20}
          width='100%'
        />
      </div>

      <div className='col-span-2'>
        <SkeletonItem
          height={280}
          width='100%'
        />
      </div>
    </div>
  );
};
