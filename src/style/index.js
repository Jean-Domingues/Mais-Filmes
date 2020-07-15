import styled, { createGlobalStyle, keyframes } from 'styled-components';
import * as colors from '../config/colors';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    color: ${colors.textColor};
    background-color: ${colors.backgroundColor};
  }

`;

const fadeIn = keyframes`
  70%{
    opacity:0;
  }
  100% {
    opacity: 1;
    }
`;

export const Container = styled.div`
  animation: ${fadeIn} 3s linear;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    }
  100% {
    transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  border: ${props => props.border} solid ${colors.prymaryColor};
  border-radius: 50%;
  border-top: ${props => props.border} solid #fff;
  width: ${props => props.size};
  height: ${props => props.size};
  animation: ${spin} 2s linear infinite;
`;

export default GlobalStyle;
