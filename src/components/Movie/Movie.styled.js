import styled from 'styled-components';

export const Wrapper = styled.li`
  color: white;
  background-color: #5b4865;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Name = styled.p`
  padding: 10px;
  font-size: 24px;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 20px;
`;
