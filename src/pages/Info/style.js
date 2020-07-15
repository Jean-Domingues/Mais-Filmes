import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  padding: 0 4% 60px 4%;
  color: ${colors.textColor};

  h3 {
    font-size: 1.8em;
  }

  @media only screen and (max-width: 1024px) {
    h3 {
      font-size: 1.6em;
    }
  }
  @media only screen and (max-width: 425px) {
    h3 {
      font-size: 1.2em;
    }
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 375px) {
    h3 {
      font-size: 1.1em;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.6em;

  @media only screen and (max-width: 1024px) {
    font-size: 3.1em;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2.8em;
  }
  @media only screen and (max-width: 425px) {
    font-size: 2.4em;
  }
  @media only screen and (max-width: 320px) {
    font-size: 2em;
  }
`;

export const MovieTrailler = styled.iframe`
  width: 80%;
  height: 500px;
  display: block;
  margin: 20px auto;

  @media only screen and (max-width: 1024px) {
    height: 400px;
  }
  @media only screen and (max-width: 425px) {
    height: 300px;
    width: 90%;
    margin: 10px auto;
  }
  @media only screen and (max-width: 375px) {
    height: 220px;
  }
`;

export const Genre = styled.span`
  border: 1px solid #484848;
  margin-right: 10px;
  font-weight: bold;
  font-size: 2.3em;
  padding: 5px;
  display: inline-block;

  @media only screen and (max-width: 768px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 425px) {
    font-size: 1.6em;
    margin-right: 5px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 1.4em;
  }
`;

export const Informations = styled.section`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;

  section {
    width: 20%;
    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 550px) {
    flex-direction: column-reverse;

    section {
      width: 100%;
      margin: auto;
      border: 2px solid gray;
      padding: 0 10%;
    }
  }
`;

export const Details = styled.div`
  width: 78%;
  position: relative;

  h2 {
    font-size: 3em;
  }

  h4 {
    font-size: 1.8em;
  }

  div span {
    display: inline-block;
    padding: 5px;
    font-size: 1.8em;
    margin: 10px 5px 0 0;
    border: 1px solid ${colors.textColor};
  }

  p {
    font-size: 1.8em;
    text-align: justify;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 1024px) {
    h2 {
      font-size: 2.8em;
    }
    h4 {
      font-size: 1.6em;
    }
    p {
      font-size: 1.6em;
    }
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 2.4em;
    }
    h4 {
      font-size: 1.4em;
    }
    p {
      font-size: 1.2em;
    }

    div span {
      font-size: 1.4em;
    }
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
    h2 {
      font-size: 2.6em;
    }
    h4 {
      font-size: 1.4em;
    }
    p {
      font-size: 1.5em;
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 425px) {
    h2 {
      font-size: 2.4em;
    }
    h4 {
      font-size: 1.2em;
    }
    p {
      font-size: 1.2em;
      margin-top: 10px;
      margin-bottom: 20px;
    }

    div span {
      margin: 5px 5px 0 0;
    }
  }
  @media only screen and (max-width: 350px) {
    h2 {
      font-size: 2.2em;
    }
    h4 {
      font-size: 1.2em;
    }
    p {
      font-size: 1.2em;
      margin-bottom: 20px;
    }
  }
`;
