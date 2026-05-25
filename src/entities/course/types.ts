export type TCourse = {
  data: TCourseData;
};

type TCourseData = {
  title: string;
  subtitle: string;
  courseFrame: TCourseFrameData;
  courseFrameTablet?: TCourseFrameData;
  courseFrameMobile?: TCourseFrameData;
};

type TCourseFrameData = {
  image: TImage;
};
