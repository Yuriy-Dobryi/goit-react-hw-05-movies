import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./App.styled";

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            <svg>
              <useref></useref>
            </svg>
          </span>{" "}
          MovieMuse
        </Logo>
        <nav>
          <Link to="">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/about">About us</Link>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      
    </Container>
  );
};