import { useActionState, useEffect, useState } from 'react';

const submitAction = async (prevState, formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  await sleep(2000);
  console.log('Submitted:', { name, email, message });
  return { error: null, success: true };
};

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const Login = () => {
  const [state, formAction, isPending] = useActionState(submitAction, {});

  const [{ name, email, message }, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(state);
    if (state.succes) {
      console.log(state);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  }, [state]);

  return (
    <div>
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto"
        action={formAction}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            disabled={isPending}
          />
          {state.error?.name && (
            <p className="text-sm text-red-600 mt-1">{state.error?.name}</p>
          )}
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
            value={email}
            onChange={handleChange}
            disabled={isPending}
          />
          {state.error?.email && (
            <p className="text-sm text-red-600 mt-1">{state.error?.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Your message..."
            value={message}
            onChange={handleChange}
            rows={4}
            disabled={isPending}
          />
          {state.error?.message && (
            <p className="text-sm text-red-600 mt-1">{state.error?.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline${
              isPending ? ' opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={isPending}
          >
            {isPending ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
