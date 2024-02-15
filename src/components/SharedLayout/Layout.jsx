import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import css from './Layout.module.css';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <Suspense
        fallback={
          <div className={css.container}>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
