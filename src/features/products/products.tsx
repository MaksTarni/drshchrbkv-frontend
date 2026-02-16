import { Box } from '../../shared/components/atoms/box';
import { AccentTextWithSubtitle } from '../../shared/components/molecules/accent-text-with-description';
import { TitleWithSubtitle } from '../../shared/components/molecules/title-with-subtitle/title-with-subtitle';
import { useDimensions } from '../../shared/hooks/dimensions';
import { ProductsLayoutsFactory } from './layouts';
import type { TCompaniesData, TCourseData } from './types';

type Props = {
  courseData: TCourseData;
  companiesData: TCompaniesData[];

  projectsTitle: string;
  projectsSubtitle: string;
  projectsMetaLeft?: string;
  projectsMetaRight?: string;
};

export const Products = ({
  courseData,
  companiesData,
  projectsSubtitle,
  projectsTitle,
  projectsMetaLeft,
  projectsMetaRight,
}: Props) => {
  const { isMobile } = useDimensions();

  return (
    <div className='pt-30 md:pt-55'>
      <AccentTextWithSubtitle
        title={projectsMetaLeft || ''}
        subtitle={projectsMetaRight || ''}
      />

      <Box height={isMobile ? 60 : 124} />

      <TitleWithSubtitle
        title={courseData?.title}
        subtitle={courseData?.subtitle}
      />

      <Box height={isMobile ? 16 : 20} />

      <img
        src={courseData?.image.url}
        alt={courseData?.image.alt}
        className='w-full h-full object-cover'
      />

      <Box height={isMobile ? 16 : 20} />

      <AccentTextWithSubtitle
        title={projectsTitle}
        subtitle={projectsSubtitle}
        withLine
      />

      {companiesData.map(item => (
        <ProductsLayoutsFactory
          variant={item.variant}
          title={item.title}
          subtitle={item.subtitle}
          frameA={item.frameA}
          frameB={item.frameB}
          tagA={item.tagA}
          tagB={item.tagB}
        />
      ))}
    </div>
  );
};
