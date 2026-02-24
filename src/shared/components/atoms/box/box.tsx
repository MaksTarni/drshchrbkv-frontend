export type Props = {
  height?: number;
};

export const Box = ({ height = 8 }: Props) => {
  return <div style={{ minHeight: `${height}px` }}></div>;
};
