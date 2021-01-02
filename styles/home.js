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
  flex-direction: column;
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
    animation: ${colorCycle} 10s infinite ease-in-out;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span:nth-child(1) {
    background-image: linear-gradient(90deg, #007cf0, #00dfd8);
  }
  span:nth-child(2) {
    background-image: linear-gradient(90deg, #7928ca, #ff0080);
    animation-delay: 2.5s;
  }
  span:nth-child(3) {
    background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
    animation-delay: 5s;
  }
  span:nth-child(4) {
    font-size: 5.5rem;
    background-image: linear-gradient(90deg, #166e46, #2ebf91);
    animation-delay: 7.5s;
  }
`;

export const NavigationBtn = styled.button`
  margin-top: 1.2rem;
  padding: 1.2rem 4.2rem;

  border: 0.1rem solid #777;
  border-radius: 0.4rem;
  background-color: transparent;
  
  outline: none;
  cursor: pointer;
  
  color: #777;
  font-weight: bold;
  font-size: 1.2rem;

  transition: color 2s, border-color 2s, background-color 2s ease;

  :hover {
    color: #000;
    background-color: #fff;
  }
`;