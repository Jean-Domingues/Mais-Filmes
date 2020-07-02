import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
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
          <li>Inicio</li>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Atores</li>
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
