export const filterCars = (adverts, { price, mileageFrom, mileageTo }) => {
  return adverts.filter(
    ({ rentalPrice, mileage }) =>
      (!price || parseInt(rentalPrice) <= parseInt(price)) &&
      (!mileageFrom || mileage >= parseInt(mileageFrom)) &&
      (!mileageTo || mileage <= parseInt(mileageTo))
  );
};
