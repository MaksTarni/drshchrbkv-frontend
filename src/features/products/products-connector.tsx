import { useMemo } from 'react';
import { useCourse } from '../../entities/course';
import { Products } from './products';
import { mapCompaniesDataToUI, mapCourseDataToUI } from './utils';
import { useCompanies } from '../../entities/companies';

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

  if (isCourseLoading || isCompaniesLoading) {
    return null;
  }

  return (
    <Products
      projectsTitle={projectsTitle}
      projectsMetaLeft={projectsMetaLeft}
      projectsMetaRight={projectsMetaRight}
      projectsSubtitle={projectsSubtitle}
      courseData={mappedCourseData}
      companiesData={mappedCompaniesData}
    />
  );
};
