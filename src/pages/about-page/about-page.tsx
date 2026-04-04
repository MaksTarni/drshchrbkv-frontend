import { TextBody } from '../../shared/components/atoms/text-body';
import { Title } from '../../shared/components/atoms/title';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { useDimensions } from '../../shared/hooks/dimensions';
import type { TScreenData } from './types';
import { LinkButton } from './ui';

export type Props = {
  screenData?: TScreenData;
  email: string;
  onHome?: VoidFunction;
};

export const AboutPage = ({ screenData, email, onHome }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <Header
        leftText='home'
        onLeftClick={onHome}
        withRightButton
      />

      <div className={`grid grid-cols-1 desktop:grid-cols-2 h-screen`}>
        <div
          className={`col-span-1 flex flex-col items-start justify-center ${isMobile ? 'p-4 gap-4' : 'p-5 gap-5'}`}
        >
          <Title text={screenData?.title} />
          {screenData?.content.map(item => {
            return (
              <div
                key={item.title}
                className='flex flex-col items-start justify-start'
              >
                <TextBody text={item.title} />
                {item.links?.map(link => {
                  return (
                    <a
                      href={link.link}
                      key={link.text}
                    >
                      <LinkButton text={link.text} />
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${isMobile ? 'p-4' : 'p-5'}`}>
        <Footer email={email} />
      </div>
    </>
  );
};
