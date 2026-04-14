import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../../shared/components/atoms/box';
import { AccentTextWithSubtitle } from '../../shared/components/molecules/accent-text-with-subtitle';
import { TitleWithSubtitle } from '../../shared/components/molecules/title-with-subtitle/title-with-subtitle';
import { useDimensions } from '../../shared/hooks/dimensions';
import { getFullUrl } from '../../shared/utils';
import { ProductsLayoutsFactory } from './layouts';
import type { TCompaniesData, TCourseData } from './types';
import {
  S_MOBILE,
  S_NOT_MOBILE,
  XL_MOBILE,
  XL_NOT_MOBILE,
} from '../../shared/indents';

type Props = {
  courseData: TCourseData;
  companiesData: TCompaniesData[];

  projectsTitle: string;
  projectsSubtitle: string;
  projectsMetaLeft?: string;
  projectsMetaRight?: string;

  onAllImagesLoaded?: () => void;
};

export const Products = ({
  courseData,
  companiesData,
  projectsSubtitle,
  projectsTitle,
  projectsMetaLeft,
  projectsMetaRight,
  onAllImagesLoaded,
}: Props) => {
  const { isMobile } = useDimensions();
  const loadedCountRef = useRef(0);

  // 1 course image + 2 images (frameA + frameB) per company layout
  const totalImages = 1 + companiesData.length * 2;

  useEffect(() => {
    if (totalImages === 0) {
      onAllImagesLoaded?.();
    }
  }, [totalImages, onAllImagesLoaded]);

  const handleSettle = () => {
    loadedCountRef.current++;
    if (loadedCountRef.current >= totalImages) {
      onAllImagesLoaded?.();
    }
  };

  return (
    <div className='pt-30 md:pt-55'>
      <AccentTextWithSubtitle
        title={projectsMetaLeft || ''}
        subtitle={projectsMetaRight || ''}
      />

      <Box height={isMobile ? XL_MOBILE : XL_NOT_MOBILE} />

      <TitleWithSubtitle
        title={courseData?.title}
        subtitle={courseData?.subtitle}
      />

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <Link
        to='/stub'
        className='custom-cursor'
      >
        <img
          src={getFullUrl(courseData?.image.url)}
          alt={courseData?.image.alt}
          className='w-full h-full object-cover'
          onLoad={handleSettle}
          onError={handleSettle}
        />
      </Link>

      <Box height={isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <AccentTextWithSubtitle
        title={projectsTitle}
        subtitle={projectsSubtitle}
        withLine
      />

      {companiesData.map(item => (
        <ProductsLayoutsFactory
          key={item.title}
          variant={item.variant}
          title={item.title}
          subtitle={item.subtitle}
          frameA={item.frameA}
          frameB={item.frameB}
          tagA={item.tagA}
          tagB={item.tagB}
          onImageLoad={handleSettle}
        />
      ))}
    </div>
  );
};
