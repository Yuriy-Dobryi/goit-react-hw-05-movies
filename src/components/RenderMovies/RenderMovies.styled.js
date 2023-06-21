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

export const Wrapper = styled.li`
  color: white;
  background-color: #5b4865;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: auto;
  grid-template-columns: auto;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;