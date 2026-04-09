import { AccentText } from '../../atoms/accent-text';
import { Subtitle } from '../../atoms/subtitle';
import { LinkButtonWithArrow } from '../../molecules/link-button-with-arrow';

export type Props = {
  subtitle: string;
  accentText: string;
  link?: string;
};

export const SubtitleWithAccentText = ({
  accentText,
  subtitle,
  link,
}: Props) => {
  return (
    <div className='flex flex-col items-start justify-start'>
      <Subtitle text={subtitle} />
      {link ? (
        <LinkButtonWithArrow
          link={link}
          text={accentText}
          variant='accentText'
        />
      ) : (
        <AccentText text={accentText} />
      )}
    </div>
  );
};
