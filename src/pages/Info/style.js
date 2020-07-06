import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  padding: 0 4% 100px 4%;
  color: ${colors.textColor};
`;

export const Title = styled.h1``;

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
`;
