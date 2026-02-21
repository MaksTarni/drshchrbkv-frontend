import { LinkButtonWithText } from '../../atoms/link-button-with-text';

export type Props = {
  leftText?: string;
  rightText?: string;
  leftTextLink?: string;
  rightTextLink?: string;
};

export const Header = ({
  leftText,
  rightText,
  leftTextLink,
  rightTextLink,
}: Props) => {
  return (
    <header className='absolute top-0 flex justify-between p-5 max-w-420 w-full'>
      <LinkButtonWithText to={leftTextLink || '/'}>
        {leftText}
      </LinkButtonWithText>
      <LinkButtonWithText to={rightTextLink || '/'}>
        {rightText}
      </LinkButtonWithText>
    </header>
  );
};
