import { useDimensions } from '../../../hooks/dimensions';
import { Box } from '../../atoms/box';
import { Subtitle } from '../../atoms/subtitle';

export type Props = {
  title?: string;
  url: string;
  alt: string;
  className?: string;
};

export const ProjectImageContainer = ({
  title,
  alt,
  url,
  className,
}: Props) => {
  const { isDesktop } = useDimensions();

  return (
    <div className='w-full bg-background-secondary flex flex-col items-center h-70 p-5 pb-0 overflow-hidden tablet:h-83.5 desktop:h-150'>
      {title ? (
        <Subtitle
          text={title}
          className='self-start'
        />
      ) : (
        <Box height={20} />
      )}

      <Box height={isDesktop ? 68 : 30} />

      <img
        src={url}
        alt={alt}
        className={`w-full object-cover self-center ${className}`}
      />
    </div>
  );
};
