import ReactMarkdown from 'react-markdown';
import { Title } from '../title';
import { Subtitle } from '../subtitle';

type Props = {
  text: string;
};

export const MarkdownView = ({ text }: Props) => {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => <Title text={children} />,
        p: ({ children }) => <Subtitle text={children} />,
      }}
    >
      {text}
    </ReactMarkdown>
  );
};
