import styled, { css } from 'styled-components';


const NextButton = styled.button`
  width: 6em;
  height: 3em;

  border: none;
  border-radius: 0.5em;

  background-color: rgb(119, 202, 72);

  color: #222;
  font-family: 'Consolas', Arial, Helvetica, sans-serif;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(123, 206, 75);
  }
  &:active {
    background-color: rgb(114, 189, 70);
  }

  ${props => props.disabled && css`
    visibility: hidden;
  `}
`;

export default NextButton;