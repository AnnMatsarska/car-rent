import { CarsCatalog } from 'components/Cars/CarsCatalog';
import { Filter } from 'components/Filter/Filter';

const CatalogPage = () => {
  return (
    <>
      <Filter />
      <CarsCatalog />
    </>
  );
};

export default CatalogPage;
