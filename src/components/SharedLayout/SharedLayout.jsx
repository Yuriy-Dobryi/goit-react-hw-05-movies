import { Outlet } from "react-router-dom";
import { Main, Container, Header, Logo, StyledNavLink, StyledLink } from './SharedLayout.styled';
import logoImage from '../../images/logo.png'

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <StyledLink to="/">
          <Logo src={logoImage} />
        </StyledLink>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};