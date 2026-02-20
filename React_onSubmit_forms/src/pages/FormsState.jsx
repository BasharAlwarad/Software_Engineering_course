import { useState } from 'react';

const FormsState = () => {
  const [formsInput, setFormsInput] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormsInput((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formsInput);
  };

  return (
    <div>
      <form className="flex flex-col gap-y-[15px]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="input"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          className="input"
          name="email"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default FormsState;
