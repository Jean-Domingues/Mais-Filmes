import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  padding: 0 4%;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  padding: 0 0 5px 5px;
  margin-top: 10px;
  color: ${colors.textColor};
`;

export const Results = styled.section`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  margin-right: 20px;
  width: 23%;
  padding-bottom: 20px;
  cursor: pointer;

  div {
    width: 100%;
  }

  img {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Pagination = styled.div`
  width: 100%;
  padding: 50px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textColor};
  font-size: 24px;

  & svg {
    cursor: pointer;
  }
`;
