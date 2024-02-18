import { styled } from 'styled-components';
import { ReactComponent as Arrow } from '../../icons/arrow.svg';

export const Form = styled.form`
  margin-top: 40px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 18px;
`;

export const LabelTitle = styled.span`
  display: block;
  margin-bottom: 8px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const DropdownSelector = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
  width: ${({ width }) => width};
  height: 48px;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SelectorItem = styled.li`
  cursor: pointer;
  color: rgba(18, 20, 23, 0.2);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover,
  &:focus {
    color: var(--secondary-color-black);
  }
`;

export const MilageWrapper = styled.input`
  padding-left: 75px;
  width: 160px;
  height: 48px;
  border: none;
  border-radius: ${({ $side }) => {
    if ($side === 'left') {
      return '14px 0 0 14px';
    }
    return '0 14px 14px 0';
  }};
  border-right: ${({ $side }) => {
    if ($side === 'left') {
      return '1px solid rgba(138, 138, 137, 0.20)';
    }
  }};
  background: #f7f7fb;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const FromToContainer = styled.div`
  display: flex;
`;

export const FormItemWrapper = styled.div`
  position: relative;
`;

export const FromTo = styled.div`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11%;
`;

export const BtnSearch = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  margin-top: 28px;
  background: var(--primary-color-blue);
  color: white;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus {
    background: var(--secondary-color-blue);
  }
`;

export const CustomArrow = styled(Arrow)`
  position: absolute;
  top: 50%;
  right: 18px;
  pointer-events: none;

  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '360deg')})
    translateY(-50%);
  transform-origin: top;
`;

export const SelectorWrapper = styled.div`
  position: relative;
`;

export const MileageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InvalidMessage = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
  font-size: 10px;
  color: red;
`;
