import React, { Component } from 'react';

import styled from 'styled-components';

import StepComponent from './components/StepComponent/StepComponent';


const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
`;

const data = [{
  question: "Во сколько я пойду спать?",
  possibleAnswers: [
    "Час ночи",
    "Два часа ночи",
    "Три часа ночи"
  ]
}, {
  question: "А во сколько ушел на деле?",
  possibleAnswers: [
    "Два часа",
    "Три часа",
    "Не лег вообще"
  ],
}];

class App extends Component {
  render() {
    return (
      <Main>
        <StepComponent steps={data} />
      </Main>
    );
  }
}

export default App;
