export type TCourse = {
  data: TCourseData;
};

type TCourseData = {
  title: string;
  subtitle: string;
  courseFrame: TCourseFrameData;
};

type TCourseFrameData = {
  image: string;
};
