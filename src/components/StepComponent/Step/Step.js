import React, { Component } from 'react';

import styled from 'styled-components';

const Question = styled.h1`
  margin-top: 1em;
  font-size: 2em;
`;

const PossibleAnswers = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: stretch;
  align-items: flex-start;

  width: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const PossibleAnswer = styled.label`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;

  margin-top: 1em;
`;

const Text = styled.p`
  margin: 0;
  margin-left: 1em;
`;


class Step extends Component {

  state = {
    currentAnswer: this.props.defaultOption ? this.props.defaultOption.answer : ''
  }
  
  handleAnswerSelection = (event) => {
    this.setState({
      currentAnswer: event.currentTarget.value
    });
    this.props.onChoise(event.currentTarget.value);
  }

  isChecked(possibleAnswer) {
    return possibleAnswer === this.state.currentAnswer;
  }

  render() {
    const {
      question,
      possibleAnswers
    } = this.props.data;
    return (
      <>
        <Question>{question}</Question>
        <PossibleAnswers>
          {possibleAnswers && possibleAnswers.map(possibleAnswer => {
              return (
                <PossibleAnswer key={possibleAnswer}>
                  <input 
                    type='radio'  
                    value={possibleAnswer} 
                    checked={this.isChecked(possibleAnswer)}
                    onChange={this.handleAnswerSelection}
                  />
                  <Text>{possibleAnswer}</Text>
                </PossibleAnswer>
              )
            })}
        </PossibleAnswers>
      </>
    )
  }
}

export default Step;