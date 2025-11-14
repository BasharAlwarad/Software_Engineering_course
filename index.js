const delegation1 = (a) => {
  console.log(`${a} cooked as boil`);
};
const delegation2 = (a) => {
  console.log(`${a} cooked as fried`);
};
const cooking = (ingredient, func) => {
  return func(ingredient);
};

cooking('apple', delegation1);
cooking('apple', delegation2);
