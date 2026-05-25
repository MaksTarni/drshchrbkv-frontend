import { useMemo, useState } from 'react';
import { useCourse } from '../../entities/course';
import { Products } from './products';
import { mapCompaniesDataToUI, mapCourseDataToUI } from './utils';
import { useCompanies } from '../../entities/companies';
import { Skeleton } from './skeleton';
import { resolveImageByBreakpoint } from '../../shared/utils';
import { useDimensions } from '../../shared/hooks/dimensions';

type Props = {
  projectsTitle: string;
  projectsSubtitle: string;
  projectsMetaLeft?: string;
  projectsMetaRight?: string;
};

export const ProductsConnector = ({
  projectsSubtitle,
  projectsTitle,
  projectsMetaLeft,
  projectsMetaRight,
}: Props) => {
  const breakpoints = useDimensions();

  const [loadedForKey, setLoadedForKey] = useState<string | null>(null);

  const { data: courseData, isLoading: isCourseLoading } = useCourse();
  const { data: companiesData, isLoading: isCompaniesLoading } = useCompanies();

  const mappedCourseData = useMemo(
    () => mapCourseDataToUI(courseData),
    [courseData],
  );

  const mappedCompaniesData = useMemo(
    () => mapCompaniesDataToUI(companiesData),
    [companiesData],
  );

  const dataKey = useMemo(
    () =>
      `${mappedCourseData.image.url}-${mappedCompaniesData.map(i => `${i.frameA.url}${i.frameB.url}`).join(',')}`,
    [mappedCourseData, mappedCompaniesData],
  );

  const allLoaded = loadedForKey === dataKey;

  if (isCourseLoading || isCompaniesLoading) {
    return <Skeleton />;
  }

  const resolvedImage = resolveImageByBreakpoint({
    defaultImage: mappedCourseData.image,
    mobileImage: mappedCourseData?.imageMobile,
    tabletImage: mappedCourseData?.imageTablet,
    breakpoints,
  });

  return (
    <>
      {!allLoaded && <Skeleton />}
      <div style={!allLoaded ? { display: 'none' } : undefined}>
        <Products
          projectsTitle={projectsTitle}
          projectsMetaLeft={projectsMetaLeft}
          projectsMetaRight={projectsMetaRight}
          projectsSubtitle={projectsSubtitle}
          courseData={mappedCourseData}
          courseImage={resolvedImage}
          companiesData={mappedCompaniesData}
          onAllImagesLoaded={() => setLoadedForKey(dataKey)}
        />
      </div>
    </>
  );
};
