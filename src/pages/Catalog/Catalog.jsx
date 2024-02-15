import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/car/operation';
import { selectCars } from 'redux/car/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCarsThunk({ page, limit: 12 }));
  }, [dispatch, page]);
  return (
    <>
      <h1>{cars.map(car => car.model)}</h1>
    </>
  );
};

export default CatalogPage;
