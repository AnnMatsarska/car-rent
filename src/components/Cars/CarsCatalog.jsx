import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/car/operation';

import { CarItem } from '../CarItem/CarItem';
import { CarList, Container, Button } from './CarsCatalog.styled';
import { selectCars, selectIsLoading } from 'redux/car/selectors';
import { Loader } from 'components/Loader/Loader';

export const CarsCatalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const [isLastPage, setIsLastPage] = useState(false);
  const isLoading = useSelector(selectIsLoading);

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
      {isLoading && <Loader />}
      {!isLastPage && cars.length > 0 && (
        <Button type="button" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </Container>
  );
};
