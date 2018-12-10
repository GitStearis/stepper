import React from 'react';

import StepContent from '../StepContent';


const StepList = (props) => {
  return (
    <StepContent>
      { props.children ? props.children[props.currentStep] : null }
    </StepContent>
  );
}

export default StepList;