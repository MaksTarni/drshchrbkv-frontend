import { createPortal } from 'react-dom';
import type { TScreenData } from './types';
import { useDimensions } from '../../shared/hooks/dimensions';
import { MenuPoint, MenuTitle } from './ui';
import { Button } from '../../shared/components/atoms/button';
import { useState } from 'react';

type Props = {
  screenData: TScreenData[];
  onClose: VoidFunction;
};

export const Drawer = ({ screenData, onClose }: Props) => {
  const { isMobile } = useDimensions();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      onClose();
    }, 800);
  };

  return createPortal(
    <div
      className={`w-full h-screen fixed inset-0 z-50 ${isClosing ? 'animate-backdrop-blur-out' : 'animate-backdrop-blur'}`}
      onClick={handleClose}
    >
      <div
        className={`tablet:w-150 desktop:w-1/2 bg-white absolute top-2.5 right-2.5 left-2.5 tablet:left-auto bottom-2.5  z-100 flex items-start justify-between p-2.5 overflow-hidden scroll-auto ${isClosing ? 'animate-slide-out' : 'animate-slide-in'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className={`flex flex-col ${isMobile ? 'gap-8' : 'gap-10'}`}>
          {screenData.map(item => {
            return (
              <div className='flex flex-col'>
                {item.title && <MenuTitle text={item.title} />}
                {item.items?.map(link => {
                  return (
                    <MenuPoint
                      text={link.text}
                      to={link.link}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <Button onClick={handleClose}>close</Button>
      </div>
    </div>,
    document.body,
  );
};
