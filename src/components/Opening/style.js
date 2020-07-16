import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  animation: ${fadeIn} 0.2s linear;

  img {
    width: 40%;
  }
`;
