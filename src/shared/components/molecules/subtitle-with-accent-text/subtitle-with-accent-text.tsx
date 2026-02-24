import { AccentText } from '../../atoms/accent-text';
import { Subtitle } from '../../atoms/subtitle';

export type Props = {
  subtitle: string;
  accentText: string;
};

export const SubtitleWithAccentText = ({ accentText, subtitle }: Props) => {
  return (
    <div className='flex flex-col items-start justify-start'>
      <Subtitle text={subtitle} />
      <AccentText text={accentText} />
    </div>
  );
};
