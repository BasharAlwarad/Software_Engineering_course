import { useFormStatus } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/ErrorFallback';

const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`w-full py-2 rounded text-white ${
        pending
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

export default function Login() {
  const handleSubmit = async (formData) => {
    try {
      const formObject = Object.fromEntries(formData.entries());
      await sleep(3000);
      console.log(formObject);
    } catch (error) {
      console.error(error.message);
      throw new Error('form submit has !');
    }
  };

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto"
          action={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">Login Form</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <Submit />
          </div>
        </form>
      </ErrorBoundary>
    </div>
  );
}
