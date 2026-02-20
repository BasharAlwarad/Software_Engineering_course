import { useState, useEffect } from 'react';

const FormsActions = () => {
  const [formsInput, setFormsInput] = useState({ name: '', email: '' });

  const submitAction = async (formData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    setFormsInput({ name: name, email: email });
    console.log(formsInput);
  };

  useEffect(() => {
    console.log(formsInput);
  }, [formsInput]);

  return (
    <div>
      <form className="flex flex-col gap-y-[15px]" action={submitAction}>
        <input type="text" placeholder="Name" className="input" name="name" />
        <input type="text" placeholder="Email" className="input" name="email" />

        <button>submit</button>
      </form>
    </div>
  );
};

export default FormsActions;
