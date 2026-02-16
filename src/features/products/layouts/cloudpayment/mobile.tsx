import { Link } from 'react-router-dom';
import { AccentTextWithSubtitle } from '../../../../shared/components/molecules/accent-text-with-description';
import type { TImage, TTag } from '../../types';

export type Props = {
  tagA: TTag;
  tagB: TTag;
  frameA: TImage;
  frameB: TImage;
};

export const Mobile = ({ frameA, frameB, tagA, tagB }: Props) => {
  return (
    <>
      <div className='w-full'>
        <AccentTextWithSubtitle
          title={tagA.title}
          subtitle={tagA.subtitle}
          withLine
        />
      </div>

      <Link
        to='https://www.behance.net/gallery/159303845/Cloud-Visual-philosophy-as-a-product'
        target='_blank'
      >
        <img
          src={frameA.url}
          alt={frameB.alt}
          className='w-full object-cover'
        />
      </Link>

      <div className='w-full'>
        <AccentTextWithSubtitle
          title={tagB.title}
          subtitle={tagB.subtitle}
          withLine
        />
      </div>

      <Link
        to='https://www.behance.net/gallery/159303845/Cloud-Visual-philosophy-as-a-product'
        target='_blank'
      >
        <img
          src={frameB.url}
          alt={frameB.alt}
          className='w-full object-cover'
        />
      </Link>
    </>
  );
};
