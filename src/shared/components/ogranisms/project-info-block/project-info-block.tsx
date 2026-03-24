import { useDimensions } from '../../../hooks/dimensions';
import { getFullUrl } from '../../../utils';
import { Box } from '../../atoms/box';
import { MarkdownView } from '../../atoms/markdown-view';
import { Title } from '../../atoms/title';
import { Video } from '../../atoms/video';

export type Props = {
  title?: string;
  firstColumnMarkdown: string[];
  secondColumnMarkdown?: string[];
  isVideo?: boolean;
  firstImage: TImage;
  secondImage?: TImage;
  thirdImage?: TImage;
  fourthImage?: TImage;
  isLast?: boolean;
};

export const ProjectInfoBlock = ({
  title,
  firstColumnMarkdown,
  secondColumnMarkdown,
  isVideo,
  firstImage,
  secondImage,
  fourthImage,
  thirdImage,
  isLast,
}: Props) => {
  const { isMobile, isDesktop } = useDimensions();

  return (
    <div>
      {isVideo && (
        <div className='grid grid-cols-1 gap-4 tablet:gap-5'>
          <Video src={getFullUrl(firstImage.url)} />
        </div>
      )}

      {fourthImage && !isVideo && (
        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-5'>
          <img
            src={getFullUrl(firstImage.url)}
            alt={firstImage.alt}
            className='w-full object-cover '
          />

          {secondImage && (
            <img
              src={getFullUrl(secondImage.url)}
              alt={secondImage.alt}
              className='w-full object-cover'
            />
          )}

          {thirdImage && !isVideo && (
            <img
              src={getFullUrl(thirdImage.url)}
              alt={thirdImage.alt}
              className='w-full object-cover'
            />
          )}

          <img
            src={getFullUrl(fourthImage.url)}
            alt={fourthImage.alt}
            className='w-full object-cover'
          />
        </div>
      )}

      {thirdImage && !fourthImage && !isVideo && (
        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-5'>
          <img
            src={getFullUrl(firstImage.url)}
            alt={firstImage.alt}
            className='w-full object-cover tablet:col-span-2'
          />

          {secondImage && (
            <img
              src={getFullUrl(secondImage.url)}
              alt={secondImage.alt}
              className='w-full object-cover'
            />
          )}

          <img
            src={getFullUrl(thirdImage.url)}
            alt={thirdImage.alt}
            className='w-full object-cover'
          />
        </div>
      )}

      {!thirdImage && !fourthImage && !isVideo && (
        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-5'>
          {secondImage ? (
            <>
              <img
                src={getFullUrl(firstImage.url)}
                alt={firstImage.alt}
                className='w-full object-cover'
              />
              <img
                src={getFullUrl(secondImage?.url)}
                alt={secondImage?.alt}
                className='w-full object-cover'
              />
            </>
          ) : (
            <img
              src={getFullUrl(firstImage.url)}
              alt={firstImage.alt}
              className='w-full object-cover tablet:col-span-2'
            />
          )}
        </div>
      )}

      <Box height={isMobile ? 32 : 40} />

      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-x-5'>
        <div className='tablet:col-start-2 desktop:col-start-3 flex flex-col gap-5'>
          <Title text={title} />

          {firstColumnMarkdown.map(item => (
            <MarkdownView
              key={item}
              text={item}
            />
          ))}
        </div>

        <div
          className={`tablet:col-start-2 desktop:col-start-4 flex flex-col gap-5 ${isDesktop ? 'pt-17' : ''}`}
        >
          {secondColumnMarkdown?.map(item => (
            <MarkdownView
              key={item}
              text={item}
            />
          ))}
        </div>
      </div>

      {!isLast ? <Box height={isMobile ? 68 : 124} /> : null}
    </div>
  );
};
