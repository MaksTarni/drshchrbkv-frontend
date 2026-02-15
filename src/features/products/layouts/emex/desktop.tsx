import { AccentTextWithSubtitle } from '../../../../shared/components/molecules/accent-text-with-description';

export type Props = { title: string; subtitle: string };

export const Desktop = ({ subtitle, title }: Props) => {
  return (
    <>
      <div className='[grid-area:1/1/2/2]'>
        <AccentTextWithSubtitle
          title={title}
          subtitle={subtitle}
          withLine
          isNeedFlexEnd
        />
      </div>
      <div className='[grid-area:1/2/2/3]'>
        <img
          src='/test-2.png'
          alt='test-2'
          className='w-full h-full object-cover '
        />
      </div>
      <div className='[grid-area:2/2/3/3]'>
        <AccentTextWithSubtitle
          title={title}
          subtitle={subtitle}
          withLine
          isNeedFlexEnd
        />
      </div>
      <div className='[grid-area:1/3/3/5]'>
        <img
          src='/test.png'
          alt='test'
          className='w-full h-full object-cover'
        />
      </div>
    </>
  );
};
