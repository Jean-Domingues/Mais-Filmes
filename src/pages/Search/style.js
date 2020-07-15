import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  padding: 0 4%;
`;

export const Title = styled.h1`
  font-size: 2.8em;
  font-weight: bold;
  padding: 0 0 20px 5px;
  margin-top: 10px;
  color: ${colors.textColor};

  @media only screen and (max-width: 425px) {
    font-size: 2em;
  }
`;

export const Results = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 10px;

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

export const Item = styled.div`
  min-width: 130px;
  padding: 10px 10px 20px 10px;
  border-radius: 10px;
  border: 1px solid #3e3e3e;
  cursor: pointer;
  h3 {
    font-size: 2em;
  }

  div {
    width: 100%;
  }

  img {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.2);
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 1.8em;
    }
  }
  @media only screen and (max-width: 425px) {
    h3 {
      font-size: 1.6em;
    }
  }
  @media only screen and (max-width: 375px) {
    h3 {
      font-size: 1.4em;
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
  font-size: 2.4em;

  & svg {
    cursor: pointer;
  }

  @media only screen and (max-width: 425px) {
    font-size: 2em;

    svg {
      width: 20px;
    }
  }
`;
