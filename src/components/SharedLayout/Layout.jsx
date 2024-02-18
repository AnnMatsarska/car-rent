import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { StyledLayout } from './Layout.styled';

export const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </StyledLayout>
  );
};
