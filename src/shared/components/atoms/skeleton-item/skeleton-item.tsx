import Skeleton, { type SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export type Props = SkeletonProps & {};

export const SkeletonItem = (props: Props) => {
  return (
    <Skeleton
      style={{
        backgroundColor: '#F8F8F8',
      }}
      highlightColor='#FFFFFF'
      {...props}
    />
  );
};
