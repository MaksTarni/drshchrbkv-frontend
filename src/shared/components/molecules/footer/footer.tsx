import { useDimensions } from '../../../hooks/dimensions';
import { Box } from '../../atoms/box';
import { LinkButtonWithText } from '../../atoms/link-button-with-text';

export type Props = { email: string };

export const Footer = ({ email }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <div className='flex flex-col items-start justify-start'>
      <Box height={isMobile ? 64 : 124} />

      <div className='flex flex-col items-start justify-start'>
        <LinkButtonWithText to={`mailto:${email}`}>{email}</LinkButtonWithText>
        <LinkButtonWithText
          to='https://www.linkedin.com/in/daria-shcherbakova/'
          target='_blank'
        >
          linkedin
        </LinkButtonWithText>
      </div>

      <Box height={isMobile ? 64 : 124} />
    </div>
  );
};
