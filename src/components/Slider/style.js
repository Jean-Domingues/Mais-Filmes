import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
`;

export const WrapContainer = styled.div`
  display: flex;
  width: 90%;
  transition: all 0.7s;
`;

export const Slide = styled.div`
  height: ${props => props.size / 14}vw;
  margin-right: 10px;
  position: relative;
  cursor: pointer;

  & img {
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    height: ${props => props.size / 9}vw;
  }
  @media only screen and (max-width: 425px) {
    height: ${props => props.size / 7}vw;
  }
`;

export const ArrowLeft = styled.button`
  background: linear-gradient(to left, rgba(0, 0, 0, 0), black);
  cursor: pointer;
  border: none;
  position: absolute;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 5%;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
`;

export const ArrowRight = styled(ArrowLeft)`
  background: linear-gradient(to right, rgba(0, 0, 0, 0), black);
  left: auto;
  right: 0;
`;

export const Details = styled.div`
  opacity: 0;
  font-size: ${props => props.size * (1 / 18)}px;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
  transition-delay: 1s;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  & p {
    margin-top: 6px;
  }

  &:hover {
    opacity: 1;
  }
`;
