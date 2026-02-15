import { AccentTextWithSubtitle } from '../../../../shared/components/molecules/accent-text-with-description';

export type Props = { title: string; subtitle: string };

export const Mobile = ({ subtitle, title }: Props) => {
  return (
    <>
      <div className='w-full'>
        <AccentTextWithSubtitle
          title={title}
          subtitle={subtitle}
          withLine
        />
      </div>

      <img
        src='/test-2.png'
        alt='test1'
        className='w-full object-cover'
      />

      <div className='w-full'>
        <AccentTextWithSubtitle
          title={title}
          subtitle={subtitle}
          withLine
        />
      </div>

      <img
        src='/test-2.png'
        alt='test1'
        className='w-full object-cover'
      />
    </>
  );
};
