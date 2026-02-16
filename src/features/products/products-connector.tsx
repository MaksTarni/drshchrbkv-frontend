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
  const { data: courseData } = useCourse();
  const { data: companiesData } = useCompanies();

  const mappedCourseData = useMemo(
    () => mapCourseDataToUI(courseData),
    [courseData],
  );

  const mappedCompaniesData = useMemo(
    () => mapCompaniesDataToUI(companiesData),
    [companiesData],
  );

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
