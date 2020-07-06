import React from 'react';

import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-filmes.svg';

import { Head, LogoList, SearchMenu, LogoContainer } from './style';

export default function Header() {
  function handleRefresh() {
    document.location.reload();
  }

  return (
    <Head>
      <LogoList>
        <LogoContainer onClick={handleRefresh}>
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
      </SearchMenu>
    </Head>
  );
}
