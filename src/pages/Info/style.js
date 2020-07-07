import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  padding: 0 4% 60px 4%;
  color: ${colors.textColor};
`;

export const Title = styled.h1`
  font-size: 38px;
`;

export const MovieTrailler = styled.iframe`
  width: 80%;
  height: 500px;
  display: block;
  margin: 20px auto;
`;

export const Genre = styled.span`
  border: 1px solid #484848;
  margin-right: 10px;
  font-weight: bold;
  font-size: 24px;
  padding: 5px;
  display: inline-block;
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
`;

export const Details = styled.div`
  width: 78%;
  font-size: 18px;
  position: relative;

  div span {
    display: inline-block;
    padding: 5px;
    margin: 10px 5px 0 0;
    border: 1px solid ${colors.textColor};
  }

  p {
    text-align: justify;
    margin-top: 20px;
    margin-bottom: 50px;
  }
`;
