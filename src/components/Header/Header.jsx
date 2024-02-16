import {
  StyledHeader,
  StyledContainer,
  StyledList,
  StyledNavLink,
} from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <nav>
          <StyledList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/catalog">Catalog</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/favorites">Favorites</StyledNavLink>
            </li>
          </StyledList>
        </nav>
      </StyledContainer>
    </StyledHeader>
  );
};
