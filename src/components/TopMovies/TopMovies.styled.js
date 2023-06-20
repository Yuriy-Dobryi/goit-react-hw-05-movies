import styled from 'styled-components';

export const MoviesList = styled.ul`
  margin-top: 30px;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 25px;
  padding: 0;
  list-style: none;
`;