import React from 'react';

import styled from 'styled-components'; 

import StepContent from '../StepContent';


const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;

  margin-top: 1em;
`;

const Title = styled.h1`
  margin-bottom: 1em;
`;

const Line = styled.p`
  margin-left: 1em;
`;

const Summary = (props) => {
  return (
    <StepContent>
      <SummaryContainer>
        <Title>Summary</Title>
        {
          props.answers.map(answer => {
            return <Line>{ answer }</Line>
          })
        }
      </SummaryContainer>
    </StepContent>
  );
}

export default Summary;