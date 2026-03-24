import React from 'react';

type Props = {
  name?: string;
};

const Greetings = ({ name }: Props) => {
  return <div>Hello {name ? name : 'Bashar'} </div>;
};

export default Greetings;
