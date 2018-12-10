import React, { Component } from 'react';

import styled from 'styled-components';

import StepList from './StepList';
import Step from './Step';
import { Buttons, NextButton, BackButton } from './Buttons';


const Stepper = styled.div`
  min-height: 40%;
  width: 40%;

  background-color: #353737;

  border-radius: 2.5em;

  padding: 1em; 
`;

class StepComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      totalSteps: this.props.steps.length - 1,
    };
  }

  goToPreviousStep = () => {
    this.setState({ 
      currentStep: this.state.currentStep - 1 
    });
  };

  goToNextStep = () => {
    this.setState({ 
      currentStep: this.state.currentStep + 1 
    });
  };

  render() {
    return (
      <Stepper>
        <StepList currentStep={this.state.currentStep}>
          {
            this.props.steps && this.props.steps.map(step => {
              return <Step>{step}</Step>
            })
          }
        </StepList>
        <Buttons>
          <BackButton>Back</BackButton>
          <NextButton>Next</NextButton>
        </Buttons>
      </Stepper>
    );
  }
}

export default StepComponent;