import styled, { css } from 'styled-components';


const NextButton = styled.button`
  width: 6em;
  height: 3em;

  border: none;
  border-radius: 0.5em;

  background-color: #6ECB68;

  color: #222222;
  font-family: 'Consolas', Arial, Helvetica, sans-serif;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #75D86E;
    cursor: pointer;
  }
  &:active {
    background-color: #66BC60;
  }

  ${props => props.disabled && css`
    visibility: hidden;
  `}
`;

export default NextButton;