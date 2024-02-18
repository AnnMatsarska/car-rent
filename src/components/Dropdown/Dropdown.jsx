import { useEffect, useRef } from 'react';

import { DropdownStyled } from './Dropdown.styled';

export const Dropdown = ({ close, children }) => {
  const formRef = useRef(null);
  useEffect(() => {
    const closeDropdownEsc = ({ code }) => {
      if (code === 'Escape') {
        close();
      }
    };
    const handleClose = event => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        close();
      }
    };

    window.addEventListener('keydown', closeDropdownEsc);
    document.addEventListener('mousedown', handleClose);
    return () => {
      window.removeEventListener('keydown', closeDropdownEsc);
      document.addEventListener('mousedown', handleClose);
    };
  }, [close]);

  return <DropdownStyled ref={formRef}>{children}</DropdownStyled>;
};
