import Button from './components/Button';
import Greeting from './components/Greeting';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <main>
      <Greeting name="John" />
      <Greeting />
      <Button />
      <br />
      <UserProfile />
    </main>
  );
};

export default App;
