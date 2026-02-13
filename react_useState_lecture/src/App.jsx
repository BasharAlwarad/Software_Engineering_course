import { useState } from 'react';
import UserInput from './components/UserInput';
import UserOUtput from './components/UserOutPUt';

function App() {
  const [user, setUser] = useState({
    name: 'John',
    email: 'j@gmail.com',
    age: 10,
    gender: '',
  });

  return (
    <div>
      <UserInput setUser={setUser} />
      <UserOUtput user={user} />
    </div>
  );
}

export default App;
