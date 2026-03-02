import { useDimensions } from '../../../hooks/dimensions';
import { getFullUrl } from '../../../utils';
import { Box } from '../../atoms/box';
import { MarkdownView } from '../../atoms/markdown-view';
import { Title } from '../../atoms/title';

type TImage = {
  url: string;
  alt: string;
};

export type Props = {
  title?: string;
  firstColumnMarkdown: string[];
  secondColumnMarkdown?: string[];
  firstImage: TImage;
  secondImage?: TImage;
  thirdImage?: TImage;
  fourthImage?: TImage;
};

export const ProjectInfoBlock = ({
  title,
  firstColumnMarkdown,
  secondColumnMarkdown,
  firstImage,
  secondImage,
  fourthImage,
  thirdImage,
}: Props) => {
  const { isMobile, isDesktop } = useDimensions();

  return (
    <div>
      {fourthImage && (
        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-12 tablet:gap-5'>
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

          {thirdImage && (
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

      {thirdImage && !fourthImage && (
        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-12 tablet:gap-5'>
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

      {!thirdImage && !fourthImage && (
        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-12 tablet:gap-5'>
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

      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-5'>
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

      <Box height={isMobile ? 68 : 124} />
    </div>
  );
};
