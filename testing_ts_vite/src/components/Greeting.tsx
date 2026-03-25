import React from 'react';

type Props = {
  name?: string;
};

const Greeting = ({ name = 'Bashar' }: Props) => {
  return <div>Hello {name} </div>;
};

export default Greeting;
