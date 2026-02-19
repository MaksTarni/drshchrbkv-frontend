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
      <div className='[grid-area:2/4/3/5]'>
        <AccentTextWithSubtitle
          title={tagA.title}
          subtitle={tagA.subtitle}
          withLine
          withLeftPadding
        />
      </div>

      <div className='[grid-area:1/3/2/4]'>
        <AccentTextWithSubtitle
          title={tagB.title}
          subtitle={tagB.subtitle}
          withLine
          withLeftPadding
        />
      </div>

      <div className='[grid-area:2/3/3/4] pl-5'>
        <img
          src={getFullUrl(frameA.url)}
          alt={frameA.alt}
          className='w-full h-full object-cover '
        />
      </div>

      <div className='[grid-area:1/1/3/3]'>
        <img
          src={getFullUrl(frameB.url)}
          alt={frameB.alt}
          className='w-full object-cover'
        />
      </div>
    </>
  );
};
