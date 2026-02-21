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

export const ProductsSberbankLayout = ({
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

      <div className='grid grid-cols-1 gap-y-5 tablet:grid-cols-2 desktop:grid-cols-4 desktop:grid-rows-2 desktop:max-h-172.5 desktop:overflow-hidden'>
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
    </div>
  );
};
