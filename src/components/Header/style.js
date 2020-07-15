import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Head = styled.header`
  background: linear-gradient(${colors.headerColor}, ${colors.backgroundColor});
  display: flex;
  justify-content: space-between;
  padding: 15px 4%;

  @media only screen and (max-width: 425px) {
    padding: 8px 4%;
  }
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
      font-size: 1.8em;
      font-weight: 700;
    }

    li a:hover {
      cursor: pointer;
      font-size: 2em;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const LogoContainer = styled.div`
  img {
    width: 80px;
  }
  &:hover {
    cursor: pointer;
    img {
      width: 85px;
    }
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 60px;
    }
    img:hover {
      width: 65px;
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

  div svg:hover {
    cursor: pointer;
    filter: brightness(0.5);
  }

  input {
    height: 28px;
    border-radius: 5px;
    font-size: 1.8em;
    border: none;
    width: 100%;
    padding: 5px;
  }

  @media only screen and (max-width: 425px) {
    svg {
      width: 30px;
    }
    input {
      height: 22px;
      font-size: 1.6em;
    }
  }
`;

export const ArrowMenu = styled.div`
  display: none;
  width: 20px;
  margin-left: 10px;

  ul {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 9999;
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
    height: 260px;
    width: 280px;

    border-radius: 15px;
    background: rgba(0, 0, 0, 0.9);
    transition: all 0.2s;
  }

  ul li {
    margin-top: 35px;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
