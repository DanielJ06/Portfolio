import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 65px;
  width: 60%;
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