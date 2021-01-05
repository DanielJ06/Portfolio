import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 65px;
  width: 60%;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 75px;
`;

export const MyPhoto = styled.img`
  width: 250px;
  height: 250px;

  border: double 5px transparent;
  border-radius: 50%;
  border-image-slice: 1;
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #00C0FF, #FFCF00, #FC4F4F);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const TextWrapper = styled.div`
  margin-top: 50px;
  margin-left: 25px;
  font-size: 1.5rem;

  div:nth-child(2) {
    margin-top: 32px;
  }

  div {
    h3 {
      margin-bottom: 10px;
    }
  }
`;

export const SpecialBtn = styled.a`
  position: relative;
  margin-top: 25px;
  cursor: pointer;

  span {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  :hover rect {
    stroke-width: 4;
    stroke-dasharray: 196, 543;
    stroke-dashoffset: 437;
  }

  svg {
    rect {
      stroke-width: 4;
      stroke-dasharray: 353, 0;
      stroke-dashoffset: 0;
      -webkit-transition: all 600ms ease;
      transition: all 600ms ease;
    }
  }
`;