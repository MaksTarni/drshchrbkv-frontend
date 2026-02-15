import { AccentTextWithSubtitle } from '../../../../shared/components/molecules/accent-text-with-description';

export type Props = { title: string; subtitle: string };

export const Desktop = ({ subtitle, title }: Props) => {
  return (
    <>
      <div className='[grid-area:2/4/3/5]'>
        <AccentTextWithSubtitle
          title={title}
          subtitle={subtitle}
          withLine
        />
      </div>

      <div className='[grid-area:1/3/2/4]'>
        <AccentTextWithSubtitle
          title={title}
          subtitle={subtitle}
          withLine
        />
      </div>

      <div className='[grid-area:2/3/3/4]'>
        <img
          src='/test-3.png'
          alt='test-3'
          className='w-full h-full object-cover '
        />
      </div>

      <div className='[grid-area:1/1/3/3]'>
        <img
          src='/test-4.png'
          alt='test-4'
          className='w-full object-cover'
        />
      </div>
    </>
  );
};
