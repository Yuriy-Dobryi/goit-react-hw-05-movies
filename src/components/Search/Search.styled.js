import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;
  border-radius: 30px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:focus-within {
    outline: 7px solid #ae8fd0;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding-left: 15px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
  `;

export const Btn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: none;
  background-image: url('https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;