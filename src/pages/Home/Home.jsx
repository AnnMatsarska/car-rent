import { Container } from 'components/Cars/CarsCatalog.styled';
import {
  Section,
  Title,
  SubTitle,
  TitleWrapper,
  Logo,
  FindLink,
} from './Home.styled';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title>
            Unlock Your Journey: Welcome to <Logo>Rent and Drive!</Logo>
          </Title>
          <SubTitle>Where every road becomes an adventure.</SubTitle>
          <SubTitle>
            Start your drive with us and embrace the freedom of the open road!
          </SubTitle>
        </TitleWrapper>
        <FindLink to="/catalog">Find your car</FindLink>
      </Container>
    </Section>
  );
};

export default HomePage;
