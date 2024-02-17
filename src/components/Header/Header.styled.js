import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
`;

export const StyledContainer = styled.div`
  max-width: 1440px;
  padding: 20px 112px;
`;

export const StyledList = styled.ul`
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: flex-end;
  gap: 68px;
`;
export const StyledNavLink = styled(NavLink)`
  padding: 14px 44px;
  color: black;

  background-color: rgba(18, 20, 23, 0.1);
  border: none;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 8px;
    transform: translateY(-2px);
  }

  &.active {
    color: white;
    background-color: var(--primary-color-blue);
  }
`;
