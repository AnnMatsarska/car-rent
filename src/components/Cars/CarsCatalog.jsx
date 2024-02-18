import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk, fetchByBrandThunk } from 'redux/car/operation';
import { resetStateCars } from 'redux/car/carSlice';
import { useSearchParams } from 'react-router-dom';

import { CarItem } from '../CarItem/CarItem';
import { CarList, Container, Button } from './CarsCatalog.styled';
import { selectCars, selectIsLoading } from 'redux/car/selectors';
import { Loader } from 'components/Loader/Loader';

export const CarsCatalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  const [isLastPage, setIsLastPage] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(
        getCarsThunk({
          page,
          limit: 12,
        })
      );
      return;
    }

    const filters = {};

    searchParams.forEach((value, key) => (filters[key] = value));

    dispatch(fetchByBrandThunk(filters));
    return () => {
      dispatch(resetStateCars());
    };
  }, [dispatch, page, searchParams]);

  useEffect(() => {
    return () => {
      dispatch(resetStateCars());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    setPage(prev => (prev += 1));
  };

  useEffect(() => {
    if (cars.length % 12 !== 0) {
      setIsLastPage(true);
    }
  }, [cars]);

  return (
    <section>
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
    </section>
  );
};
