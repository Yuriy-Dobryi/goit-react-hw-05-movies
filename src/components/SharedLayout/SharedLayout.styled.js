import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Main = styled.main`
  padding: 30px 0;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 5px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.img`
  width: 220px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 40px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 600;

  &.active {
    color: white;
    background-color: rgb(92, 125, 218);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`