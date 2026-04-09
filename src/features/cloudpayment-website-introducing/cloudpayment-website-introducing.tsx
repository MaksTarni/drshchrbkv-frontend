import { Box } from '../../shared/components/atoms/box';
import { ProjectTitleWithSubtitles } from '../../shared/components/molecules/project-title-with-subtitles';
import { SubtitleWithAccentText } from '../../shared/components/ogranisms/subtitle-with-accent-text';
import { useDimensions } from '../../shared/hooks/dimensions';
import { getFullUrl } from '../../shared/utils';
import type { TScreenData } from './types';

type Props = {
  screenData: TScreenData;
};

export const CloudpaymentWebsiteIntroducing = ({ screenData }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <img
        src={getFullUrl(screenData?.image.url)}
        alt={screenData?.image.alt}
        className='w-full h-dvh object-cover'
      />

      <Box height={isMobile ? 16 : 20} />

      <div className={`${isMobile ? 'px-4' : 'px-5'}`}>
        <div className='grid grid-cols-2'>
          <ProjectTitleWithSubtitles
            title={screenData?.projectIntro.title}
            subtitles={screenData?.projectIntro.subtitles}
          />
        </div>

        <Box height={isMobile ? 68 : 124} />

        <div className='grid grid-cols-1 tablet:grid-cols-2'>
          <div className='flex flex-col tablet:flex-row gap-5 tablet:gap-4'>
            {screenData?.tags.map((item, index) => {
              console.log(item);
              return (
                <div key={index}>
                  <SubtitleWithAccentText
                    accentText={item.title}
                    subtitle={item.subtitle}
                    link={item.accentTextLink}
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
