import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeHighlighterProps {
  code: string;
  language?: string;
  style?: React.CSSProperties;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  code,
  language = 'typescript',
  style,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error(err);
      setCopied(false);
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute top-2 right-2 btn btn-xs btn-circle btn-ghost z-10"
        onClick={handleCopy}
        title="Copy code"
        type="button"
        tabIndex={0}
      >
        {copied ? (
          // Checkmark icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          // Copy icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect
              x="9"
              y="9"
              width="13"
              height="13"
              rx="2"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
            <rect
              x="3"
              y="3"
              width="13"
              height="13"
              rx="2"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{ borderRadius: '0.5rem', fontSize: '0.95em', ...style }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
