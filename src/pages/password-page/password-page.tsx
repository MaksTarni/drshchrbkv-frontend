import { Controller } from 'react-hook-form';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { useDimensions } from '../../shared/hooks/dimensions';
import { Subtitle } from '../../shared/components/atoms/subtitle';

export type Props = {
  accentColor: string;
  email: string;
  onClick: VoidFunction;
  onHome: VoidFunction;
};

export const PasswordPage = ({
  accentColor,
  email,
  onClick,
  onHome,
}: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <Header
        leftText='home'
        onLeftClick={onHome}
      />

      <div className='h-dvh flex flex-col'>
        <div
          className={`w-full h-[50%] items-end justify-items-start  grid grid-cols-1 tablet:grid-cols-2 ${isMobile ? 'p-4' : 'p-5'}`}
        >
          <Controller
            name='password'
            render={({ field, fieldState }) => {
              return (
                <div className='w-full flex desktop:items-center desktop:justify-end flex-col gap-1.25 desktop:flex-row-reverse'>
                  {fieldState.error && (
                    <Subtitle
                      text='wrong password. try again'
                      color='text-text-accent'
                    />
                  )}
                  <div
                    className={`w-full desktop:w-1/2 border ${
                      fieldState.error
                        ? 'border-border-accent'
                        : 'border-border-primary'
                    } hover:border-border-secondary focus-within:border-border-dark  h-15 ${isMobile ? 'p-4' : 'p-5'} flex items-center justify-between gap-2 transition-colors duration-200 ease-in-out`}
                  >
                    <input
                      {...field}
                      type='password'
                      placeholder='enter password to view'
                      className='w-full outline-none'
                    />
                    {field.value && (
                      <Subtitle
                        text='enter'
                        color='text-text-primary'
                        onClick={onClick}
                        className='hover:text-text-accent active:text-text-primary transition-colors duration-200 ease-in-out'
                      />
                    )}
                  </div>
                </div>
              );
            }}
          />
        </div>
        <div
          className='w-full h-[50%]'
          style={{ backgroundColor: accentColor }}
        ></div>
      </div>

      <div className={`${isMobile ? 'px-4' : 'px-5'}`}>
        <Footer email={email} />
      </div>
    </>
  );
};
