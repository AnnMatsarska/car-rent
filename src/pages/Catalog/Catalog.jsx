import { useSelector } from 'react-redux';
import { selectCars } from 'redux/car/selectors';

import { CarsCatalog } from 'components/Cars/CarsCatalog';

const CatalogPage = () => {
  const cars = useSelector(selectCars);

  return <>{cars && <CarsCatalog cars={cars} />}</>;
};

export default CatalogPage;
