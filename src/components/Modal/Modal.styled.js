import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: var(--backdrop-color-black);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;

export const StyledModal = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 24px;
`;

export const Content = styled.div`
  margin-top: 24px;
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 36px;
  right: 24px;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;

  &: hover {
    scale: 1.2;
  }
`;
