import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  padding: 0 4%;
  padding-bottom: 50px;
  h1:first-of-type {
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 3.2em;
  font-weight: bold;
  margin-top: 30px;
  color: ${colors.textColor};
  @media only screen and (max-width: 768px) {
    font-size: 2.6em;
  }

  @media only screen and (max-width: 425px) {
    font-size: 2.2em;
  }
`;
