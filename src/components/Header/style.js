import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Head = styled.header`
  background: linear-gradient(${colors.headerColor}, ${colors.backgroundColor});
  display: flex;
  justify-content: space-between;
  padding: 15px 4%;
`;

export const LogoList = styled.ul`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0 22px;

    li a {
      text-decoration: none;
      color: ${colors.textColor};
      padding: 0 12px;
      font-weight: 700;
    }

    li a:hover {
      cursor: pointer;
      font-size: 20px;
    }
  }
`;

export const LogoContainer = styled.div`
  &:hover {
    cursor: pointer;
    img {
      width: 85px;
    }
  }
`;

export const SearchMenu = styled.div`
  div {
    padding: 10px;
    margin-left: 5px;
  }

  div:hover {
    cursor: pointer;
    filter: brightness(0.5);
  }
`;
