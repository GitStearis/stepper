import React from 'react';

import styled from 'styled-components';


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
  return (
    <StepContent>
      {props.children ? props.children[props.currentStep] : null}
    </StepContent>
  );
}

export default StepList;