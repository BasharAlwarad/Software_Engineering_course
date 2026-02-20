import { useState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="p-4 bg-red-100 text-red-700 border border-red-300 rounded">
    <p className="font-semibold">
      There was an error while submitting the form:
    </p>
    <pre className="mt-2 text-sm">{error.message}</pre>
    <button
      onClick={resetErrorBoundary}
      className="mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
    >
      Retry
    </button>
  </div>
);

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

const FormsPending = () => {
  const [formsInput, setFormsInput] = useState({ name: '', email: '' });

  const submitAction = async (formData) => {
    try {
      const name = formData.get('name');
      const email = formData.get('email');

      if (!name && !email) {
        throw new Error('both name and email must be submitted!');
      }
      if (!name) {
        throw new Error('name must be submitted!');
      }
      if (!email) {
        throw new Error('Email must be submitted!');
      }
      await sleep(3000);
      setFormsInput({ name: name, email: email });
      console.log(formsInput);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    console.log(formsInput);
  }, [formsInput]);

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <form className="flex flex-col gap-y-[15px]" action={submitAction}>
          <input type="text" placeholder="Name" className="input" name="name" />
          <input
            type="text"
            placeholder="Email"
            className="input"
            name="email"
          />

          {/* <button>submit</button> */}
          <Submit />
        </form>
      </ErrorBoundary>
    </div>
  );
};

export default FormsPending;
