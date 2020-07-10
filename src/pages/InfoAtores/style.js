import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  padding: 0 4%;

  h1:first-of-type {
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  padding: 0 0 5px 5px;
  margin-top: 30px;
  color: ${colors.textColor};
`;
