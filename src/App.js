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

class App extends Component {
  render() {
    return (
      <Main>
        <StepComponent steps={[]} />
      </Main>
    );
  }
}

export default App;
