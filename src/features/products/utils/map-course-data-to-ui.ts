import type { TCourse } from '../../../entities/course';

import type { TCourseData } from '../types';

export const mapCourseDataToUI = (data?: TCourse): TCourseData => {
  if (!data) {
    return {
      image: {
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
      url: data.data.courseFrame.image,
      alt: 'course image',
    },
  };
};
