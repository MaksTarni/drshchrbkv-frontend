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
  firstImage: TImage;
  title?: string;
  secondImage?: TImage;
  firstColumnMarkdown: string[];
  secondColumnMarkdown?: string[];
  firstMobileImage?: TImage;
  secondMobileImage?: TImage;
};

export const ProjectInfoBlock = ({
  firstImage,
  firstMobileImage,
  secondMobileImage,
  secondImage,
  title,
  firstColumnMarkdown,
  secondColumnMarkdown,
}: Props) => {
  const { isMobile, isDesktop } = useDimensions();

  return (
    <div>
      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-12 tablet:gap-5'>
        {secondImage ? (
          <>
            <img
              src={
                isMobile && firstMobileImage
                  ? getFullUrl(firstMobileImage?.url)
                  : getFullUrl(firstImage.url)
              }
              alt={
                isMobile && firstMobileImage
                  ? firstMobileImage?.alt
                  : firstImage.alt
              }
            />
            <img
              src={
                isMobile && secondMobileImage
                  ? getFullUrl(secondMobileImage?.url)
                  : getFullUrl(secondImage.url)
              }
              alt={
                isMobile && secondMobileImage
                  ? secondMobileImage?.alt
                  : secondImage.alt
              }
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

      <Box height={isMobile ? 48 : 80} />
    </div>
  );
};
