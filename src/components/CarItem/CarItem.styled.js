import styled from 'styled-components';

export const Item = styled.li`
  display: block;
  position: relative;
  width: 274px;
`;

export const Img = styled.img`
  display: block;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: var(--secondary-color-black);
`;
export const CarTextTitle = styled.p`
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CarTextSpan = styled.span`
  color: var(--primary-color-blue);
`;

export const CarTextSubTitle = styled.p`
  color: var(--secondary-color-gray);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const CarTextSubSpan = styled.span`
  &:not(:last-child)::after {
    content: '';
    vertical-align: middle;
    display: inline-block;
    width: 1px;
    height: 16px;
    margin: 0 6px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const Button = styled.button`
  margin-top: 28px;
  width: 100%;
  padding: 12px 98px;

  cursor: pointer;
  border-radius: 12px;
  border: none;
  background-color: var(--primary-color-blue);
  color: white;

  font-size: 14px;
  font-weight: 600;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    background-color: var(--secondary-color-blue);
  }
`;
