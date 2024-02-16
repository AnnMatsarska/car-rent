import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCarsThunk } from 'redux/car/operation';

import { CarItem } from '../CarItem/CarItem';
import { CarList, Container } from './CarsCatalog.styled';

export const CarsCatalog = ({ cars }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    dispatch(
      getCarsThunk({
        page,
        limit: 12,
      })
    );
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prev => (prev += 1));
  };

  useEffect(() => {
    if (cars.length % 12 !== 0) {
      setIsLastPage(true);
    }
  }, [cars]);

  return (
    <Container>
      <CarList>
        {cars.map(car => {
          return <CarItem key={car.id} car={car} />;
        })}
      </CarList>
      {!isLastPage && cars.length > 0 && (
        <button type="button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </Container>
  );
};
