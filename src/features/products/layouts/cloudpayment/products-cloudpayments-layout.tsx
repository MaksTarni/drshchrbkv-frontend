import { Box } from '../../../../shared/components/atoms/box';

import { TitleWithSubtitle } from '../../../../shared/components/molecules/title-with-subtitle/title-with-subtitle';
import { useDimensions } from '../../../../shared/hooks/dimensions';
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
};

export const ProductsCloudpaymentsLayout = ({
  subtitle,
  title,
  frameA,
  frameB,
  tagA,
  tagB,
}: Props) => {
  const { isMobile, isTablet, isDesktop } = useDimensions();
  return (
    <div>
      <Box height={isMobile ? 68 : 124} />

      <TitleWithSubtitle
        title={title}
        subtitle={subtitle}
      />

      <Box height={isMobile ? 16 : 20} />

      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-y-5 desktop:grid-cols-4 desktop:[&>*:nth-child(2)]:pr-2.5 desktop:[&>*:nth-child(3)]:pl-2.5'>
        {isMobile && (
          <Mobile
            tagA={tagA}
            tagB={tagB}
            frameA={frameA}
            frameB={frameB}
          />
        )}

        {isTablet && (
          <Tablet
            tagA={tagA}
            tagB={tagB}
            frameA={frameA}
            frameB={frameB}
          />
        )}

        {isDesktop && (
          <Desktop
            tagA={tagA}
            tagB={tagB}
            frameA={frameA}
            frameB={frameB}
          />
        )}
      </div>

      <Box height={isMobile ? 120 : 220} />
    </div>
  );
};
