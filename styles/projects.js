import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 65px;
`;

export const ReposContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 50px;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Repo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 15px;
  padding: 12px 25px;

  height: 85px;
  cursor: pointer;
  border-radius: 5px;

  background-color: #31363F;
  color: #fff;
`;

export const Redirect = styled.button`
  border: 3px solid #fff;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  outline: none;
  padding: 5px 8px;

  cursor: pointer;
  transition: background-color 1s, color 1s ease;

  :hover {
    background-color: #fff;
    color: #000;
  }
`;