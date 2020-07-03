import styled from 'styled-components';

import { Link } from 'react-router-dom';
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
  display: flex;
  align-items: center;

  div {
    padding: 10px;
    margin-left: 5px;
  }

  div:hover {
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0px 1px 8px #7a7a7a;
  }
`;
