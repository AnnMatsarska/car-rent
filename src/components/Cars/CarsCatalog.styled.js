import styled from 'styled-components';

export const CarList = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 29px;
`;

export const Container = styled.div`
  max-width: 1440px;
  padding: 0px 112px 20px 112px;
`;

export const Button = styled.button`
  display: block;
  margin-top: 100px;
  margin-bottom: 70px;
  margin-left: auto;
  margin-right: auto;

  border: none;
  background-color: transparent;
  color: var(--primary-color-blue);
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus {
    color: var(--secondary-color-blue);
  }
`;
