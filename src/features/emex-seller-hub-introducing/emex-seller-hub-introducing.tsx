import { Box } from '../../shared/components/atoms/box';
import { ProjectTitleWithSubtitles } from '../../shared/components/molecules/project-title-with-subtitles';
import { SubtitleWithAccentText } from '../../shared/components/ogranisms/subtitle-with-accent-text';
import { useDimensions } from '../../shared/hooks/dimensions';
import {
  S_MOBILE,
  S_NOT_MOBILE,
  XL_MOBILE,
  XL_NOT_MOBILE,
} from '../../shared/indents';
import { getFullUrl } from '../../shared/utils';
import type { TImage, TScreenData } from './types';

export type Props = { screenData: TScreenData; image: TImage };

export const EmexSellerHubIntroducing = ({ screenData, image }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <img
        src={getFullUrl(image.url)}
        alt={image.alt}
        className='w-full h-dvh object-cover'
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <div className={`${isMobile ? 'px-s-mobile' : 'px-s-not-mobile'}`}>
        <div className='grid grid-cols-2'>
          <ProjectTitleWithSubtitles
            title={screenData?.projectIntro.title}
            subtitles={screenData?.projectIntro.subtitles}
          />
        </div>

        <Box height={isMobile ? XL_MOBILE : XL_NOT_MOBILE} />

        <div className='grid grid-cols-1 tablet:grid-cols-2'>
          <div className='flex flex-col tablet:flex-row gap-s-mobile tablet:gap-s-not-mobile'>
            {screenData?.tags.map((item, index) => {
              return (
                <div key={index}>
                  <SubtitleWithAccentText
                    accentText={item.title}
                    subtitle={item.subtitle}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
