import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './SharedLayout/Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const CatalogPage = lazy(() => import('../pages/Catalog/Catalog'));
const FavoritePage = lazy(() => import('../pages/Favorite/Favorite'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
