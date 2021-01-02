import React from 'react';

import { Container, TextWrapper, NavigationBtn } from '../styles/home';

const Index = (props) => {
  return (
    <Container>
      <TextWrapper>
        <span>HI, I'M</span>
        <span>DANIEL!</span>
        <span>FULLSTACK</span>
        <span>DEVELOPER</span>
      </TextWrapper>

      <NavigationBtn>
        Know me
      </NavigationBtn>
    </Container>
  )
}

export default Index;
