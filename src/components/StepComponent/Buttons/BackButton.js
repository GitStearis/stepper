import styled, { css } from 'styled-components';


const BackButton = styled.button`
  width: 6em;
  height: 3em;

  border: none;
  border-radius: 0.5em;

  background-color: #F2BE3C;

  color: #222222;
  font-family: 'Consolas', Arial, Helvetica, sans-serif;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #FFC83F;
    cursor: pointer;
  }
  &:active {
    background-color: #E5B439;
  }

  ${props => props.disabled && css`
    visibility: hidden;
  `}
`;

export default BackButton;