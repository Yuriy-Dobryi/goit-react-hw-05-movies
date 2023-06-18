import { Outlet } from "react-router-dom";
import { Main, Container, Header, Logo, StyledNavLink, StyledLink } from './App.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <Logo>
          <StyledLink to="/">
            <img src="https://svgsilh.com/svg/146007.svg" alt="logo" />
            ovieMuse
          </StyledLink>
        </Logo>
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