import Skeleton, { type SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export type Props = SkeletonProps & {};

export const SkeletonItem = (props: Props) => {
  return (
    <Skeleton
      baseColor='#F8F8F8'
      highlightColor='#FFFFFF'
      customHighlightBackground={`
        linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 30%,
          #FFFFFF 50%,
          rgba(255, 255, 255, 0) 70%
        )
      `}
      {...props}
    />
  );
};
