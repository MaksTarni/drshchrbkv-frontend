import { useEffect, useRef } from 'react';
import { Box } from '../../shared/components/atoms/box';
import { AccentTextWithSubtitle } from '../../shared/components/molecules/accent-text-with-subtitle';
import { useDimensions } from '../../shared/hooks/dimensions';
import {
  S_MOBILE,
  S_NOT_MOBILE,
  XXL_MOBILE,
  XXL_NOT_MOBILE,
} from '../../shared/indents';
import { getFullUrl } from '../../shared/utils';
import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
  onAllImagesLoaded?: () => void;
};

export const Gallery = ({ screenData, onAllImagesLoaded }: Props) => {
  const { isMobile } = useDimensions();
  const loadedCountRef = useRef(0);

  const imageUrls = screenData.gallery.filter(item => item.url);
  const totalImages = imageUrls.length;

  useEffect(() => {
    if (totalImages === 0) {
      onAllImagesLoaded?.();
    }
  }, [totalImages, onAllImagesLoaded]);

  const handleSettle = () => {
    loadedCountRef.current++;
    if (loadedCountRef.current >= totalImages) {
      onAllImagesLoaded?.();
    }
  };

  return (
    <>
      <Box height={isMobile ? XXL_MOBILE : XXL_NOT_MOBILE} />
      <div className='gap-s-mobile tablet:gap-s-not-mobile'>
        <AccentTextWithSubtitle
          title={screenData?.title}
          subtitle={screenData?.subtitle}
        />

        <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

        <div className='grid gap-s-mobile tablet:gap-s-not-mobile grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
          {screenData?.gallery.map(item => {
            return (
              <img
                key={`${item.alt}-${item.url}`}
                src={getFullUrl(item.url)}
                alt={item.alt}
                className='object-cover w-full'
                onLoad={handleSettle}
                onError={handleSettle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
