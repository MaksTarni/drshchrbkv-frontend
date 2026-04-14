import { useState } from 'react';
import { LinkButtonWithText } from '../../atoms/link-button-with-text';
import { Button } from '../../atoms/button';
import { DrawerConnector } from '../../../../features/drawer';

export type Props = {
  leftText?: string;
  leftTextLink?: string;
  withRightButton?: boolean;
  onLeftClick?: VoidFunction;
};

export const Header = ({
  leftText,
  withRightButton,
  leftTextLink,
  onLeftClick,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 flex justify-between p-s-mobile tablet:p-s-not-mobile max-w-420 w-full bg-white z-1000'>
      <LinkButtonWithText
        to={leftTextLink || '/'}
        onClick={onLeftClick}
      >
        {leftText}
      </LinkButtonWithText>
      {withRightButton && (
        <Button onClick={() => setIsOpen(true)}>index</Button>
      )}
      {isOpen && <DrawerConnector onClose={() => setIsOpen(false)} />}
    </header>
  );
};
