import { useDimensions } from '../../../hooks/dimensions';
import {
  M_MOBILE,
  M_NOT_MOBILE,
  XL_MOBILE,
  XL_NOT_MOBILE,
} from '../../../indents';
import { getFullUrl } from '../../../utils';
import { Box } from '../../atoms/box';
import { MarkdownView } from '../../atoms/markdown-view';
import { Title } from '../../atoms/title';
import { Video } from '../../atoms/video';

type ImageGridProps = {
  images: TImage[];
};

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

  const images = [firstImage, secondImage, thirdImage, fourthImage].filter(
    Boolean,
  ) as TImage[];

  return (
    <div>
      {isVideo ? (
        <div className='grid grid-cols-1 gap-s-mobile tablet:gap-s-not-mobile'>
          <Video src={getFullUrl(firstImage.url)} />
        </div>
      ) : (
        <ImageGrid images={images} />
      )}

      <Box height={isMobile ? M_MOBILE : M_NOT_MOBILE} />

      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-x-s-mobile tablet:gap-x-s-not-mobile'>
        <div className='tablet:col-start-2 desktop:col-start-3 flex flex-col gap-x-s-mobile tablet:gap-x-s-not-mobile'>
          <Title text={title} />

          {firstColumnMarkdown.map(item => (
            <MarkdownView
              key={item}
              text={item}
            />
          ))}
        </div>

        <div
          className={`tablet:col-start-2 desktop:col-start-4 flex flex-col gap-x-s-mobile tablet:gap-x-s-not-mobile ${
            isDesktop ? 'pt-xl-mobile' : ''
          }`}
        >
          {secondColumnMarkdown?.map(item => (
            <MarkdownView
              key={item}
              text={item}
            />
          ))}
        </div>
      </div>

      {!isLast && <Box height={isMobile ? XL_MOBILE : XL_NOT_MOBILE} />}
    </div>
  );
};

const ImageItem = ({ image }: { image: TImage }) => (
  <img
    src={getFullUrl(image.url)}
    alt={image.alt}
    className='w-full object-cover'
  />
);

const ImageGrid = ({ images }: ImageGridProps) => {
  if (!images.length) return null;

  if (images.length === 1) {
    return (
      <div className='grid grid-cols-1'>
        <div className='tablet:col-span-2'>
          <ImageItem image={images[0]} />
        </div>
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-s-mobile tablet:gap-s-not-mobile'>
        {images.map(img => (
          <ImageItem
            key={img.url}
            image={img}
          />
        ))}
      </div>
    );
  }

  if (images.length === 3) {
    return (
      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-s-mobile tablet:gap-s-not-mobile'>
        <div className='tablet:col-span-2'>
          <ImageItem image={images[0]} />
        </div>

        {images.slice(1).map(img => (
          <ImageItem
            key={img.url}
            image={img}
          />
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 tablet:grid-cols-2 gap-s-mobile tablet:gap-s-not-mobile'>
      {images.map(img => (
        <ImageItem
          key={img.url}
          image={img}
        />
      ))}
    </div>
  );
};
