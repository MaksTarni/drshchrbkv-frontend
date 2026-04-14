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
      className={`flex ${isNeedFlexEnd ? 'items-end' : 'items-start'} ${isNeedFlexEnd ? 'justify-end' : 'justify-start'} gap-xs-mobile tablet:gap-xs-not-mobile ${withLine && 'border-t border-border-primary pt-1.25'} ${withLeftPadding && 'pl-s-mobile tablet:pl-s-not-mobile'} ${withRightPadding && 'pr-s-mobile tablet:pr-s-not-mobile'}`}
    >
      <AccentText text={title} />

      <Subtitle text={subtitle} />
    </div>
  );
};
