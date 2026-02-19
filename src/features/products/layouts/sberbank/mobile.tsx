import { AccentTextWithSubtitle } from '../../../../shared/components/molecules/accent-text-with-description';
import { getFullUrl } from '../../../../shared/utils';
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

      <img
        src={getFullUrl(frameA.url)}
        alt={frameA.alt}
        className='w-full h-full object-cover '
      />

      <div className='w-full'>
        <AccentTextWithSubtitle
          title={tagB.title}
          subtitle={tagB.subtitle}
          withLine
        />
      </div>

      <img
        src={getFullUrl(frameB.url)}
        alt={frameB.alt}
        className='w-full h-full object-cover '
      />
    </>
  );
};
