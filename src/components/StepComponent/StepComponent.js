import React, { Component } from 'react';

import styled from 'styled-components';

import Step from './Step';
import Summary from './Summary';
import { Buttons, NextButton, BackButton } from './Buttons';



const Stepper = styled.div`
  min-height: 40%;
  width: 40%;

  background-color: #353737;
  
  border-radius: 2.5em;
  
  padding: 1em; 
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: stretch;
  align-items: center;

  width: 100%;
  margin: 1em;
`;

const StepList = (props) => {
  return props.children ? props.children[props.currentStep] : null;
};
  
class StepComponent extends Component {

  state = {
    answers: [],
    currentStep: 0,
    totalSteps: this.props.steps ? this.props.steps.length : 0
  }

  isLastStep() {
    return this.state.currentStep === this.state.totalSteps;
  }

  isFirstStep() {
    return this.state.currentStep === 0;
  }

  goToPreviousStep = () => {
    this.setState({ 
      currentStep: this.state.currentStep - 1 
    });
  };

  goToNextStep = () => {
    const step = this.state.currentStep + 1
    this.setState({ 
      currentStep: this.state.currentStep < this.state.totalSteps ? step : this.state.totalSteps
    });
  };

  handleOptionChoise = (answer) => {
    const answers = this.state.answers;
    const meta = this.props.steps[this.state.currentStep].meta;
    answers[this.state.currentStep] = {
      meta,
      answer
    };
    this.setState({
      answers
    })
  }

  renderStepList() {
    return this.props.steps.map(step => {
      return <Step 
        data={step} 
        key={step.question} 
        onChoise={this.handleOptionChoise}
        defaultOption={this.state.answers[this.state.currentStep]}/>
    });
  }

  render() {
    return (
      <Stepper>
        <StepContent>
          {!this.isLastStep()
            ? <StepList currentStep={this.state.currentStep}>
                {this.renderStepList()}
              </StepList>
            : <Summary data={this.state.answers}/>
          }
        </StepContent>
        <Buttons>
          <BackButton 
            onClick={this.goToPreviousStep}
            disabled={this.isFirstStep()}
          >
            Back
          </BackButton>
          <NextButton 
            onClick={this.goToNextStep }
            disabled={this.isLastStep()}
          >
            Next
          </NextButton>
        </Buttons>
      </Stepper>
    );
  }
}

export default StepComponent;