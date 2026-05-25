import type { TCourse } from '../../../entities/course';

import type { TCourseData } from '../types';

export const mapCourseDataToUI = (data?: TCourse): TCourseData => {
  if (!data) {
    return {
      image: {
        alt: 'course image',
        url: '',
      },
      imageTablet: {
        alt: 'course image',
        url: '',
      },
      imageMobile: {
        alt: 'course image',
        url: '',
      },
      title: '-',
      subtitle: '-',
    };
  }

  return {
    title: data.data.title,
    subtitle: data.data.subtitle,
    image: {
      url: data.data.courseFrame.image.url,
      alt: data.data.courseFrame.image.alt,
    },
    imageTablet: {
      url: data.data.courseFrameTablet?.image.url || '-',
      alt: data.data.courseFrameTablet?.image.alt || '-',
    },
    imageMobile: {
      url: data.data.courseFrameMobile?.image.url || '-',
      alt: data.data.courseFrameMobile?.image.alt || '-',
    },
  };
};
