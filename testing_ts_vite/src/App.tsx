import { unique } from './utils/array';
const App = () => {
  console.log(unique(['1', true, null, undefined, 1, 1, 2, 2, 2, 3, 3, 3]));
  return <main>hello</main>;
};

export default App;
