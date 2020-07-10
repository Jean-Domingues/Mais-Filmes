import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  padding: 0 4%;
`;

export const Title = styled.h1`
  font-size: 32px;
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
  padding: 20px;

  ul {
    list-style: none;
  }
`;
