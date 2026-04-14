import { Box } from '../../../../shared/components/atoms/box';

import { TitleWithSubtitle } from '../../../../shared/components/molecules/title-with-subtitle/title-with-subtitle';
import { useDimensions } from '../../../../shared/hooks/dimensions';
import {
  S_MOBILE,
  S_NOT_MOBILE,
  XL_MOBILE,
  XL_NOT_MOBILE,
} from '../../../../shared/indents';
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
  return (
    <div>
      <Box height={isMobile ? XL_MOBILE : XL_NOT_MOBILE} />

      <TitleWithSubtitle
        title={title}
        subtitle={subtitle}
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-y-s-mobile tablet:gap-y-s-not-mobile  desktop:grid-cols-4 desktop:[&>*:nth-child(2)]:pr-2.5 desktop:[&>*:nth-child(3)]:pl-2.5'>
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

      <Box height={isMobile ? 120 : 220} />
    </div>
  );
};
