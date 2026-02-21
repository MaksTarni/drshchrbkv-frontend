import { Box } from '../../shared/components/atoms/box';
import { AccentTextWithSubtitle } from '../../shared/components/molecules/accent-text-with-description';
import { useDimensions } from '../../shared/hooks/dimensions';
import { getFullUrl } from '../../shared/utils';
import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
};

export const Gallery = ({ screenData }: Props) => {
  const { isMobile } = useDimensions();

  if (!screenData?.gallery) {
    return null;
  }

  return (
    <div className='gap-4 md:gap-5'>
      <AccentTextWithSubtitle
        title={screenData?.title}
        subtitle={screenData?.subtitle}
      />

      <Box height={isMobile ? 16 : 20} />

      <div className='grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
        {screenData?.gallery.map(item => {
          return (
            <img
              key={`${item.alt}-${item.url}`}
              src={getFullUrl(item.url)}
              alt={item.alt}
              className='object-cover w-full'
            />
          );
        })}
      </div>
    </div>
  );
};
