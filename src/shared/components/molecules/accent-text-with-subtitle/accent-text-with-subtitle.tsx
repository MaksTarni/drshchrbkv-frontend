import { AccentText } from '../../atoms/accent-text';
import { Subtitle } from '../../atoms/subtitle';

export type Props = {
  title: string;
  subtitle: string;
  withLine?: boolean;
  withLeftPadding?: boolean;
  isNeedFlexEnd?: boolean;
  withRightPadding?: boolean;
};

export const AccentTextWithSubtitle = ({
  subtitle,
  title,
  withLine,
  withLeftPadding,
  isNeedFlexEnd,
  withRightPadding,
}: Props) => {
  return (
    <div
      className={`flex ${isNeedFlexEnd ? 'items-end' : 'items-start'} ${isNeedFlexEnd ? 'justify-end' : 'justify-start'} gap-1.25 ${withLine && 'border-t border-border-primary pt-1.25'} ${withLeftPadding && 'pl-5'} ${withRightPadding && 'pr-5'}`}
    >
      <AccentText text={title} />

      <Subtitle text={subtitle} />
    </div>
  );
};
