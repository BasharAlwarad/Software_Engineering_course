import { useState, useEffect } from 'react';

const FormInput = () => {
  const [item, setItem] = useState({ product: '', amount: '' });

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const addItem = (e) => {
    setItem((item) => {
      return { ...item, product: e.target.value };
    });
  };
  const addAmount = (e) => {
    setItem((item) => {
      return { ...item, amount: e.target.value };
    });
  };

  const submitData = () => {
    const myList = JSON.parse(localStorage.getItem('items'));
    myList.push(item);
    localStorage.setItem('items', JSON.stringify(myList));
    console.log(myList);
    setItems(myList);
  };

  useEffect(() => {
    if (!localStorage.getItem('items')) {
      localStorage.setItem('items', JSON.stringify([]));
    }
    console.log(items);
  }, []);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">items</label>
                <input
                  type="text"
                  className="input"
                  placeholder="items"
                  onChange={addItem}
                />
                <label className="label">amount</label>
                <input
                  type="text"
                  className="input"
                  placeholder="amount"
                  onChange={addAmount}
                />
                <button className="btn btn-neutral mt-4" onClick={submitData}>
                  submit
                </button>
              </fieldset>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div>
        {items?.map((i) => (
          <ul>
            <div className="card card-dash bg-base-100 w-96">
              <div className="card-body">
                <h2 className="card-title">{i.product} </h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">{i.amount} </button>
                </div>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FormInput;
