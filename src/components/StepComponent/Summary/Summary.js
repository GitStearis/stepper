import React from 'react';

import styled from 'styled-components'; 

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;

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
    <SummaryContainer>
      <Title>Итоги</Title>
      {props.data.map(datum => {
          return <Line>{`${datum.meta}: ${datum.answer}`}</Line>
        })}
    </SummaryContainer>
  );
}

export default Summary;