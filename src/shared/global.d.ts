export {};

declare global {
  type TImage = {
    url: string;
    alt: string;
  };
  type TProjectIntro = {
    title: string;
    subtitles: string[];
  };
  type TTags = {
    title: string;
    subtitle: string;
    accentTextWithArrow?: boolean;
    accentTextLink?: string;
  };
}
