import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-filmes.svg';

import { Head, LogoList, SearchMenu, LogoContainer } from './style';

export default function Header() {
  return (
    <Head>
      <LogoList>
        <LogoContainer>
          <img src={Logo} width="80" alt="+Filmes" />
        </LogoContainer>
        <ul>
          <li>
            <Link to="/">Inicio </Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
          <li>
            <Link to="/series">Séries</Link>
          </li>
          <li>
            <Link to="/atores">Atores</Link>
          </li>
        </ul>
      </LogoList>

      <SearchMenu>
        <div>
          <FaSearch size={24} />
        </div>
        <div>
          <GiHamburgerMenu size={30} />
        </div>
      </SearchMenu>
    </Head>
  );
}
