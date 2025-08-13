import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 text-center">
      <img
        src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"
        alt="404 Not Found"
        className="mx-auto mb-4 max-w-sm"
      />
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <button
        className=" btn-circle bg-amber-700 p-1  text-white mt-4  cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default NotFound;
