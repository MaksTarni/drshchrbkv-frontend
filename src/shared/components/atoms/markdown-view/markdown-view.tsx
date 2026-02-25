import ReactMarkdown from 'react-markdown';
import { Title } from '../title';
import { Subtitle } from '../subtitle';
import remarkBreaks from 'remark-breaks';

type Props = {
  text: string;
};

export const MarkdownView = ({ text }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{
        h2: ({ children }) => <Title text={children} />,
        p: ({ children }) => <Subtitle text={children} />,
      }}
    >
      {text}
    </ReactMarkdown>
  );
};
