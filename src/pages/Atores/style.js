import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.main`
  padding: 0 8%;
  grid-gap: 10px;
  color: ${colors.textColor};
`;

export const ActorsContainer = styled.article`
  display: grid;
  grid-template-columns: auto auto auto auto auto;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: auto auto auto auto;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto auto auto;
  }
  @media only screen and (max-width: 425px) {
    grid-template-columns: auto auto;
  }
`;

export const ListActors = styled.section`
  min-width: 160px;
  padding: 8px;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s;

  h2 {
    font-size: 2.4em;
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  img {
    display: block;
    margin: 10px 0;
    border-radius: 10px;
    width: 90%;
  }

  &:hover {
    filter: brightness(1.2);
    box-shadow: 1px 1px 4px #000;
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 2em;
    }
    min-width: 120px;
  }

  @media only screen and (max-width: 340px) {
    h2 {
      font-size: 1.6em;
    }
  }
`;

export const Pagination = styled.div`
  width: 100%;
  padding: 50px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textColor};
  font-size: 2.6em;

  & svg {
    cursor: pointer;
  }

  @media only screen and (max-width: 425px) {
    font-size: 2em;
    svg {
      width: 22px;
    }
  }
`;
