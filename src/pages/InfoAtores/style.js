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

  @media only screen and (max-width: 768px) {
    svg {
      width: 34px;
    }
  }
  @media only screen and (max-width: 425px) {
    svg {
      width: 26px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.2em;
  font-weight: bold;
  padding-bottom: 10px;
  color: ${colors.textColor};

  @media only screen and (max-width: 768px) {
    font-size: 2.8em;
  }
  @media only screen and (max-width: 425px) {
    font-size: 2.4em;
  }
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

  @media only screen and (max-width: 1024px) {
    display: block;
    margin-top: 0;

    div {
      width: 40%;
      float: left;
      padding: 20px;
    }
  }

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    margin-top: 0;

    div {
      padding-top: 0;
      width: 100%;
      margin: auto;
    }
  }
`;

export const DetailsActor = styled.section`
  width: 73%;
  padding: 0 20px;
  ul {
    list-style: none;
    p {
      text-align: justify;
      font-size: 1.6em;
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-top: 20px;
  }

  @media only screen and (max-width: 768px) {
    ul p {
      font-size: 1.4em;
    }
  }

  @media only screen and (max-width: 425px) {
    padding-top: 0;
    ul p {
      font-size: 1.2em;
    }
  }
`;

export const Films = styled.section`
  clear: both;
  margin-top: 50px;

  h2 {
    font-size: 2.4em;
    margin-bottom: 20px;
  }

  div {
    display: grid;
    grid-template-columns: auto auto auto;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 0;
    padding: 40px 20px 0 20px;
  }

  @media only screen and (max-width: 768px) {
    div {
      grid-template-columns: auto auto;
    }
  }

  @media only screen and (max-width: 425px) {
    padding-top: 20px;

    h2 {
      margin-bottom: 0;
    }
    div {
      grid-template-columns: auto;
    }
  }
`;

export const Film = styled.div`
  cursor: pointer;
  margin-right: 20px;
  max-width: 300px;

  img {
    width: 100%;
  }

  &:hover {
    border: 1px solid gray;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }

  @media only screen and (max-width: 425px) {
    margin: 10px auto;
  }
`;
