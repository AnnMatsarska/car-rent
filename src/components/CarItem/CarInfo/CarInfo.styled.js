import styled from 'styled-components';

export const Img = styled.div`
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;
export const CarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: var(--secondary-color-black);
`;
export const CarTextTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
`;
export const CarTextSpan = styled.span`
  color: var(--primary-color-blue);
`;

export const CarTextSubTitle = styled.p`
  color: var(--secondary-color-gray);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

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

export const CarDescription = styled.p`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const WrappTitle = styled.p`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Conditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Condition = styled.li`
  display: inline-block;
  padding: 7px 14px 7px 14px;
  border-radius: 35px;
  background: rgb(249, 249, 249);

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -2%;
`;
export const BtnTel = styled.a`
  display: inline-block;
  padding: 12px 50px;
  border-radius: 12px;
  background: var(--primary-color-blue);

  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;
