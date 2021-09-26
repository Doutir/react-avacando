import React, { memo } from 'react';
import {Header} from '@buffetjs/custom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding:18px 30px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Header 
        title={{label:'React Avançado Repositories'}}
        content="A list of our repositories in React Avançado course."
      />
    </Wrapper>
  );
};

export default memo(HomePage);
