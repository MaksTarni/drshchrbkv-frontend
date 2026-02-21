import { Link } from 'react-router-dom';
import { AccentTextWithSubtitle } from '../../../../shared/components/molecules/accent-text-with-description';
import { getFullUrl } from '../../../../shared/utils';
import type { TImage, TTag } from '../../types';

export type Props = {
  tagA: TTag;
  tagB: TTag;
  frameA: TImage;
  frameB: TImage;
};

export const Desktop = ({ frameA, frameB, tagA, tagB }: Props) => {
  return (
    <>
      <div className='[grid-area:1/1/2/2]'>
        <AccentTextWithSubtitle
          title={tagA.title}
          subtitle={tagA.subtitle}
          withLine
          isNeedFlexEnd
          withRightPadding
        />
      </div>
      <div className='[grid-area:1/2/2/3] pr-5'>
        <Link
          to='/stub'
          className='custom-cursor'
        >
          <img
            src={getFullUrl(frameA.url)}
            alt={frameA.alt}
            className='w-full h-full object-cover '
          />
        </Link>
      </div>
      <div className='[grid-area:2/2/3/3]'>
        <AccentTextWithSubtitle
          title={tagB.title}
          subtitle={tagB.subtitle}
          withLine
          isNeedFlexEnd
          withRightPadding
        />
      </div>
      <div className='[grid-area:1/3/3/5]'>
        <Link
          to='/stub'
          className='custom-cursor'
        >
          <img
            src={getFullUrl(frameB.url)}
            alt={frameB.alt}
            className='w-full h-full object-cover'
          />
        </Link>
      </div>
    </>
  );
};
