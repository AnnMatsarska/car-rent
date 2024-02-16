import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { StyledLayout, Container } from './Layout.styled';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Suspense
        fallback={
          <Container>
            <Loader />
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </StyledLayout>
  );
};
