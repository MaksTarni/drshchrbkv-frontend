import { Link } from 'react-router-dom';
import { useDimensions } from '../../../hooks/dimensions';
import { Box } from '../../atoms/box';

export type Props = { email: string };

export const Footer = ({ email }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <div className='flex flex-col items-start justify-start'>
      <Box height={isMobile ? 64 : 124} />

      <div className='flex flex-col items-start justify-start'>
        <span className='font-Inter text-text font-normal leading-text tracking-text'>
          {email}
        </span>
        <Link
          to='https://www.linkedin.com/in/daria-shcherbakova/'
          target='_blank'
        >
          linkedin
        </Link>
      </div>

      <Box height={isMobile ? 64 : 124} />
    </div>
  );
};
