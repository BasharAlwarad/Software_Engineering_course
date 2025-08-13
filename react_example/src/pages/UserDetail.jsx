import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const UserDetail = () => {
  const { id } = useParams();
  const userId = id;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      const found = users.find((u) => String(u.id) === String(userId));
      if (found) {
        setUser(found);
        return;
      }
    }
    // If not found in localStorage, fetch from API
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(data);
      } catch (err) {
        setUser(null);
        console.error(err);
      }
    };
    fetchUser();
  }, [userId]);

  if (!user) return <div>Loading user...</div>;

  return (
    <div>
      <h2>User Detail</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default UserDetail;
