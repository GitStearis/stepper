import styled, { css } from 'styled-components';


const BackButton = styled.button`
  width: 6em;
  height: 3em;

  border: none;
  border-radius: 0.5em;

  background-color: #bbb;

  color: #222;
  font-family: 'Consolas', Arial, Helvetica, sans-serif;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #ddd;
  }
  &:active {
    background-color: #ccc;
  }

  ${props => props.disabled && css`
    visibility: hidden;
  `}
`;

export default BackButton;