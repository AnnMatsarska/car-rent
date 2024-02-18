import { createPortal } from 'react-dom';
import React, { useEffect, useRef } from 'react';
import { Backdrop, StyledModal, BtnClose, Container } from './Modal.styled';
import closeIcon from '../../icons/close.svg';

const modalRoot = document.querySelector('#root-modal');

export const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose(false);
      }
    };

    const handleClose = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClose);
    };
  }, [onClose]);

  return createPortal(
    <Backdrop>
      <Container>
        <StyledModal ref={modalRef} onClick={event => event.stopPropagation()}>
          <BtnClose onClick={() => onClose(false)}>
            <img src={closeIcon} width={24} alt="Close" />
          </BtnClose>
          <div>{children}</div>
        </StyledModal>
      </Container>
    </Backdrop>,
    modalRoot
  );
};
