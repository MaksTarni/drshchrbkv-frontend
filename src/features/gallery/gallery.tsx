import { Box } from '../../shared/components/atoms/box';
import { AccentTextWithSubtitle } from '../../shared/components/molecules/accent-text-with-description';

export type Props = {};

export const Gallery = ({}: Props) => {
  return (
    <div className='gap-4 md:gap-5'>
      <AccentTextWithSubtitle
        title='craft'
        subtitle='always'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'></div>

      <Box height={200} />
    </div>
  );
};
