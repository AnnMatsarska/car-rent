import styled from 'styled-components';
export const DropdownStyled = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(100% + 4px);
  left: 0;

  width: 100%;
  max-height: 272px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 14px 8px 4px 18px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  background-color: var(--secondary-color-white);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(18, 20, 23, 0.05);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
