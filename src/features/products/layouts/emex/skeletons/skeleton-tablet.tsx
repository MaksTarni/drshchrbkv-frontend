import { SkeletonItem } from '../../../../../shared/components/atoms/skeleton-item';

export const SkeletonTablet = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-s-not-mobile'>
      <SkeletonItem
        height={335}
        width='100%'
      />

      <SkeletonItem
        height={20}
        width={147}
      />

      <SkeletonItem
        height={335}
        width='100%'
      />

      <SkeletonItem
        height={20}
        width={147}
      />
    </div>
  );
};
