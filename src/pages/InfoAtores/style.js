import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  padding: 0 4%;
  padding-bottom: 50px;

  svg {
    cursor: pointer;
    transition: all 0.3s;
  }
  svg:hover {
    color: red;
  }
`;

export const Title = styled.h1`
  font-size: 3.2em;
  font-weight: bold;
  padding-bottom: 10px;
  color: ${colors.textColor};
`;

export const ActorContainer = styled.article`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  div {
    width: 25%;
  }
  div img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const DetailsActor = styled.section`
  width: 73%;
  padding: 0 20px;

  ul {
    list-style: none;
    p {
      font-size: 1.6em;
    }
  }
`;

export const Films = styled.section`
  margin-top: 50px;
  div {
    display: flex;
    flex-wrap: wrap;
  }

  h2 {
    font-size: 2.4em;
  }
`;

export const Film = styled.div`
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  img {
    width: 200px;
  }
  &:hover {
    border: 1px solid gray;
  }
`;
