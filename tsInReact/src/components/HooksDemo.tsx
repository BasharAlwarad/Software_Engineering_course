import { useRef } from 'react';

const HooksDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const someID = useRef<HTMLDivElement>(null);
  const focusInput = () => {
    if (!inputRef.current) {
      return;
    }
    if (!someID.current) {
      return;
    }
    inputRef.current.style.background = 'red';
    someID.current.style.background = 'green';
  };

  return (
    <>
      <button onClick={focusInput}>Focus input</button>
      <input ref={inputRef} />
      <div ref={someID} id="someID">
        Hello
      </div>
    </>
  );
};

export default HooksDemo;
