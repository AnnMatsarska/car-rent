import { CarItem } from 'components/CarItem/CarItem';
import { Container } from 'components/Cars/CarsCatalog.styled';
import { CarList } from './Favorites.styled';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectFavoritesAdverts, selectIsLoading } from 'redux/car/selectors';

export const Favorites = () => {
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavoritesAdverts);

  return (
    <Container>
      <CarList>
        {favorites.map(car => {
          return <CarItem key={car.id} car={car} />;
        })}
      </CarList>
      {isLoading && <Loader />}
    </Container>
  );
};
