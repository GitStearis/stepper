import React from 'react';

import styled from 'styled-components';


const StepContent = styled.div`

`;

const StepList = (props) => {
  return (
    <StepContent>
      {props.children ? props.children[props.currentStep] : null}
    </StepContent>
  );
}

export { StepList };