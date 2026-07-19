import { Box } from '../../shared/components/atoms/box';
import { ProjectTitleWithSubtitles } from '../../shared/components/molecules/project-title-with-subtitles';
import { SubtitleWithAccentText } from '../../shared/components/ogranisms/subtitle-with-accent-text';
import { useDimensions, useXL } from '../../shared/hooks/dimensions';
import { S_MOBILE, S_NOT_MOBILE } from '../../shared/indents';
import { getFullUrl } from '../../shared/utils';
import type { TImage, TScreenData } from './types';

export type Props = { screenData: TScreenData; image: TImage };

export const EmexSellerHubIntroducing = ({ screenData, image }: Props) => {
  const { isMobile } = useDimensions();

  const xl = useXL();

  return (
    <>
      <img
        src={getFullUrl(image.url)}
        alt={image.alt}
        className='w-full h-[calc(100dvh-52px)] tablet:h-[calc(100dvh-48px)] desktop:h-[calc(100dvh-48px)] object-cover mt-13 tablet:mt-12 desktop:mt-12'
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <div className={`${isMobile ? 'px-s-mobile' : 'px-s-not-mobile'}`}>
        <div className='grid grid-cols-1 tablet:grid-cols-2'>
          <ProjectTitleWithSubtitles
            withGaps
            title={screenData?.projectIntro.title}
            subtitles={screenData?.projectIntro.subtitles}
          />
        </div>

        <Box height={xl} />

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
