import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.main`
  padding: 20px 8%;
  display: flex;
  flex-wrap: wrap;
  color: ${colors.textColor};
`;

export const ListActors = styled.section`
  min-width: 210px;
  max-width: 19%;
  margin: 0 10px 10px 0;
  text-align: center;

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
`;

export const Pagination = styled.div`
  width: 100%;
  padding: 50px 0 20px 0;
  display: flex;
  justify-content: center;
  color: ${colors.prymaryColor};
`;
