import { useNavigate, Link } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>take me back</button>
      <br />
      <button onClick={() => navigate(`/about`)}>take me to about</button>
      <br />
      <Link to={`/contact`}> Contact</Link>
    </div>
  );
};

export default Home;
