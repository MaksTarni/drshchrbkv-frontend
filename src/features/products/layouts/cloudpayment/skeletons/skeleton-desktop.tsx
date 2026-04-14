import { SkeletonItem } from '../../../../../shared/components/atoms/skeleton-item';

export const SkeletonDesktop = () => {
  return (
    <div className='grid grid-cols-4 gap-s-not-mobile'>
      <div className='flex justify-end'>
        <SkeletonItem
          height={20}
          width={169}
        />
      </div>

      <SkeletonItem
        height={335}
        width='100%'
      />

      <SkeletonItem
        height={335}
        width='100%'
      />

      <SkeletonItem
        height={20}
        width={169}
      />
    </div>
  );
};
