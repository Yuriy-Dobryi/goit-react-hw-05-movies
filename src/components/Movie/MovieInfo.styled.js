import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  column-gap: 20px;
  padding-right: 20px;
  background-color: #292d33;
`;

export const Poster = styled.img`
  width: 500px;
`

export const InfoList = styled.ul`
  align-self: center;
  text-align: center;
`;

export const Item = styled.li`
  color: white;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;