import { Box } from '../../../../shared/components/atoms/box';

import { TitleWithSubtitle } from '../../../../shared/components/molecules/title-with-subtitle/title-with-subtitle';
import {
  useDimensions,
  useXL,
  useXXL,
} from '../../../../shared/hooks/dimensions';
import { S_MOBILE, S_NOT_MOBILE } from '../../../../shared/indents';
import type { TImage, TTag } from '../../types';
import { Desktop } from './desktop';
import { Mobile } from './mobile';
import { Tablet } from './tablet';

export type Props = {
  title: string;
  subtitle: string;
  tagA: TTag;
  tagB: TTag;
  frameA: TImage;
  frameB: TImage;
  onImageLoad?: () => void;
};

export const ProductsCloudpaymentsLayout = ({
  subtitle,
  title,
  frameA,
  frameB,
  tagA,
  tagB,
  onImageLoad,
}: Props) => {
  const { isMobile, isTablet, isDesktop } = useDimensions();

  const xxl = useXXL();

  const xl = useXL();
  return (
    <div>
      <Box height={xl} />

      <TitleWithSubtitle
        title={title}
        subtitle={subtitle}
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-y-s-mobile tablet:gap-y-s-not-mobile tablet:gap-x-s-not-mobile desktop:gap-x-0  desktop:grid-cols-4 desktop:[&>*:nth-child(2)]:pr-[7.5px] desktop:[&>*:nth-child(3)]:pl-[7.5px]'>
        {isMobile && (
          <Mobile
            tagA={tagA}
            tagB={tagB}
            frameA={frameA}
            frameB={frameB}
            onImageLoad={onImageLoad}
          />
        )}

        {isTablet && (
          <Tablet
            tagA={tagA}
            tagB={tagB}
            frameA={frameA}
            frameB={frameB}
            onImageLoad={onImageLoad}
          />
        )}

        {isDesktop && (
          <Desktop
            tagA={tagA}
            tagB={tagB}
            frameA={frameA}
            frameB={frameB}
            onImageLoad={onImageLoad}
          />
        )}
      </div>

      <Box height={xxl} />
    </div>
  );
};
