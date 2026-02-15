import { Box } from '../../../../shared/components/atoms/box';

import { TitleWithSubtitle } from '../../../../shared/components/molecules/title-with-subtitle/title-with-subtitle';
import { useDimensions } from '../../../../shared/hooks/dimensions';
import { Desktop } from './desktop';
import { Mobile } from './mobile';
import { Tablet } from './tablet';

export type Props = { title: string; subtitle: string };

export const ProductsSberbankLayout = ({ subtitle, title }: Props) => {
  const { isMobile, isTablet } = useDimensions();

  return (
    <div>
      <Box height={isMobile ? 68 : 124} />

      <TitleWithSubtitle
        title={title}
        subtitle={subtitle}
      />

      <Box height={isMobile ? 16 : 20} />

      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 desktop:grid-rows-2 gap-5 desktop:max-h-172.5 desktop:overflow-hidden'>
        {isMobile && (
          <Mobile
            title='fdsf'
            subtitle='fsdfsdf'
          />
        )}

        {isTablet && (
          <Tablet
            title='fdsf'
            subtitle='fsdfsdf'
          />
        )}

        {!isMobile && !isTablet && (
          <Desktop
            title='fdsf'
            subtitle='fsdfsdf'
          />
        )}
      </div>
    </div>
  );
};
