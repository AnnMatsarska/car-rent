import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { getCarsThunk, fetchByBrandThunk } from 'redux/car/operation';
import { resetStateCars, loadPage } from 'redux/car/carSlice';
import { selectCars, selectIsLoading, selectPage } from 'redux/car/selectors';

import { CarItem } from '../CarItem/CarItem';
import { CarList, Container, Button, NoResults } from './CarsCatalog.styled';
import { Loader } from 'components/Loader/Loader';

export const CarsCatalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [isLastPage, setIsLastPage] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const page = useSelector(selectPage);

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
      setIsLastPage(false);
    };
  }, [dispatch, page, searchParams]);

  useEffect(() => {
    return () => {
      dispatch(resetStateCars());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadPage());
  };

  useEffect(() => {
    if (cars.length % 12 !== 0) {
      setIsLastPage(true);
    }
  }, [cars]);

  return (
    <section>
      <Container>
        {cars.length !== 0 ? (
          <CarList>
            {cars.map(car => {
              return <CarItem key={car.id} car={car} />;
            })}
          </CarList>
        ) : (
          <NoResults>
            Oops, no matches! Let's narrow it down for your perfect drive.
          </NoResults>
        )}
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
