import { Box } from '../../shared/components/atoms/box';
import { AccentTextWithSubtitle } from '../../shared/components/molecules/accent-text-with-description';
import { useDimensions } from '../../shared/hooks/dimensions';
import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
};

export const Gallery = ({ screenData }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <div className='gap-4 md:gap-5'>
      <AccentTextWithSubtitle
        title={screenData?.title}
        subtitle={screenData?.subtitle}
      />

      <Box height={isMobile ? 16 : 20} />

      <div className='grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
        {screenData?.image &&
          screenData?.image.map(item => (
            <img
              key={`${item.alt}-${item.url}`}
              src={item.url}
              alt={item.alt}
              className='object-cover'
            />
          ))}
      </div>
    </div>
  );
};
