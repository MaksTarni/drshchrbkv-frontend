import { Link } from 'react-router-dom';
import { AccentTextWithSubtitle } from '../../../../shared/components/molecules/accent-text-with-description';
import type { TImage, TTag } from '../../types';
import { getFullUrl } from '../../../../shared/utils';

export type Props = {
  tagA: TTag;
  tagB: TTag;
  frameA: TImage;
  frameB: TImage;
};

export const Desktop = ({ frameA, frameB, tagA, tagB }: Props) => {
  return (
    <>
      <div className='w-full'>
        <AccentTextWithSubtitle
          title={tagA.title}
          subtitle={tagA.subtitle}
          withLine
          isNeedFlexEnd
          withRightPadding
        />
      </div>

      <Link
        to='/stub'
        className='custom-cursor'
      >
        <img
          src={getFullUrl(frameA.url)}
          alt={frameA.alt}
          className='w-full h-full object-cover'
        />
      </Link>

      <Link
        to='https://www.behance.net/gallery/159303845/Cloud-Visual-philosophy-as-a-product'
        target='_blank'
        className='custom-cursor'
      >
        <img
          src={getFullUrl(frameB.url)}
          alt={frameB.alt}
          className='w-full h-full object-cover'
        />
      </Link>

      <div className='w-full'>
        <AccentTextWithSubtitle
          title={tagB.title}
          subtitle={tagB.subtitle}
          withLine
          withLeftPadding
        />
      </div>
    </>
  );
};
