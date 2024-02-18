import { useSelector } from 'react-redux';
import { selectFavoritesAdverts, selectIsLoading } from 'redux/car/selectors';

import { CarItem } from 'components/CarItem/CarItem';
import { Container } from 'components/Cars/CarsCatalog.styled';
import { CarList, EmptyFavText } from './Favorites.styled';
import { Loader } from 'components/Loader/Loader';

export const Favorites = () => {
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavoritesAdverts);

  return (
    <section>
      <Container>
        {favorites.length !== 0 ? (
          <CarList>
            {favorites.map(car => {
              return <CarItem key={car.id} car={car} />;
            })}
          </CarList>
        ) : (
          <EmptyFavText>Please, select your favourite cars!</EmptyFavText>
        )}
        {isLoading && <Loader />}
      </Container>
    </section>
  );
};
