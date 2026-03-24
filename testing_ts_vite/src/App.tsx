import Greetings from './components/Greetings';
const App = () => {
  return (
    <main>
      <Greetings name={'John'} />
      <Greetings />
    </main>
  );
};

export default App;
