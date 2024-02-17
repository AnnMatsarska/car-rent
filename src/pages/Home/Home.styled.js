import styled from 'styled-components';

import bgimage from '../../images/car.png';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 80px;
  height: calc(100vh - 110px);
  background-image: url(${bgimage});
  background-repeat: no-repeat;
  background-size: 1000px;
  background-position: 170% 50%;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h1`
  display: inline-block;
  width: 700px;
  margin-top: 60px;
  margin-bottom: 20px;

  font-size: 40px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--primary-color-blue);
`;

export const SubTitle = styled.p`
  display: block;
  width: 700px;
  margin-top: 10px;

  font-size: 20px;
  font-weight: 400;
  color: var(--secondary-color-gray);
`;

export const Logo = styled.span`
  font-size: 65px;
`;

export const FindLink = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  padding: 12px 50px;
  border-radius: 12px;
  background: var(--primary-color-blue);

  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus {
    background-color: var(--secondary-color-blue);
  }
`;
