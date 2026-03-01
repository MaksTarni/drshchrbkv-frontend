import { LinkButtonWithText } from '../../atoms/link-button-with-text';

export type Props = {
  leftText?: string;
  rightText?: string;
  leftTextLink?: string;
  rightTextLink?: string;
  onLeftClick?: VoidFunction;
};

export const Header = ({
  leftText,
  rightText,
  leftTextLink,
  rightTextLink,
  onLeftClick,
}: Props) => {
  return (
    <header className='fixed top-0 flex justify-between p-5 max-w-420 w-full bg-white'>
      <LinkButtonWithText
        to={leftTextLink || '/'}
        onClick={onLeftClick}
      >
        {leftText}
      </LinkButtonWithText>
      <LinkButtonWithText to={rightTextLink || '/'}>
        {rightText}
      </LinkButtonWithText>
    </header>
  );
};
