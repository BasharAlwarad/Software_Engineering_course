// create input
// use eventListener to get the value of the input
// store the value in the variable id

import ProductCard from './ProductCard.js';

const FetchOneProduct = () => {
  const userInput = document.getElementById('userInput');
  const btn = document.getElementById('btn');
  const oneCard = document.getElementById('oneCard');

  const getData = async function (id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);

    oneCard.innerHTML = ProductCard(data);
  };
  btn.addEventListener('click', () => {
    getData(userInput.value);
  });
};

export default FetchOneProduct;
