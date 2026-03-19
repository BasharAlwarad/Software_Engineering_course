// src/components/HooksDemo.tsx
import { useReducer, useState } from 'react';

type State = { count: number };
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default: {
      const exhaustiveCheck: never = action;
      throw new Error(`Unhandled action type: ${exhaustiveCheck}`);
    }
  }
};

const HooksDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>Current Count: {state.count}</h3>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment (+1)
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement (-1)
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset to 0</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HooksDemo />
    </div>
  );
};

export default App;
