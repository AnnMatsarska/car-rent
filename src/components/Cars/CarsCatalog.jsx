import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCarsThunk } from 'redux/car/operation';

import { CarItem } from '../CarItem/CarItem';
import { CarList } from './CarsCatalog.styled';

export const CarsCatalog = ({ cars }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCarsThunk({ page }));
  }, [dispatch, page]);

  return (
    <CarList>
      {cars.map(car => {
        return <CarItem key={car.id} car={car} />;
      })}
    </CarList>
  );
};
