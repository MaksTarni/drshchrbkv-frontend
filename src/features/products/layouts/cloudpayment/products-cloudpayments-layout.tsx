import { Box } from '../../../../shared/components/atoms/box';

import { TitleWithSubtitle } from '../../../../shared/components/molecules/title-with-subtitle/title-with-subtitle';
import { useDimensions } from '../../../../shared/hooks/dimensions';
import { Desktop } from './desktop';
import { Mobile } from './mobile';
import { Tablet } from './tablet';

export type Props = {
  title: string;
  subtitle: string;
};

export const ProductsCloudpaymentsLayout = ({ subtitle, title }: Props) => {
  const { isMobile, isTablet } = useDimensions();
  return (
    <div>
      <Box height={isMobile ? 68 : 124} />

      <TitleWithSubtitle
        title={title}
        subtitle={subtitle}
      />

      <Box height={isMobile ? 16 : 20} />

      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-5'>
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

        {!isTablet && !isMobile && (
          <Desktop
            title='fdsf'
            subtitle='fsdfsdf'
          />
        )}
      </div>

      <Box height={isMobile ? 120 : 220} />
    </div>
  );
};
