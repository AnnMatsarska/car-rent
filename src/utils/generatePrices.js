export const generateDropdownPrice = (min, max, step) => {
  const price = [];

  for (let i = min; i <= max; i += step) {
    price.push(i);
  }

  return price;
};
