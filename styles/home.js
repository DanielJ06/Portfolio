import styled, { keyframes } from 'styled-components';

const colorCycle = keyframes`
  0%,
  55% {
    filter: brightness(0) invert(1);
  }
  11%,
  33% {
    filter: none;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const TextWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-size: 6rem;
  line-height: 6rem;

  span {
    filter: brightness(0) invert(1);
    animation: ${colorCycle} 15s infinite ease-in-out;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span:nth-child(1) {
    background-image: linear-gradient(90deg, #007cf0, #00dfd8);
  }
  span:nth-child(2) {
    background-image: linear-gradient(90deg, #7928ca, #ff0080);
    animation-delay: 3.75s;
  }
  span:nth-child(3) {
    background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
    animation-delay: 7.5s;
  }
  span:nth-child(4) {
    background-image: linear-gradient(90deg, #166e46, #2ebf91);
    animation-delay: 11.25s;
  }
`;