import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/logo-filmes.svg';

import { Head, LogoList, SearchMenu, LogoContainer } from './style';

export default function Header() {
  const [search, setSearch] = useState(false);
  const history = useHistory();

  function handleRefresh() {
    document.location.reload();
  }

  function handleToggleSearch() {
    setSearch(!search);
  }

  function handleSearch(e) {
    if (e.key === 'Enter') {
      history.push({
        pathname: '/search',
        state: e.target.value,
      });
      setSearch(false);
    }
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

      <SearchMenu style={{ width: `${search ? '50%' : ''}` }}>
        <div>
          <FaSearch size={24} onClick={handleToggleSearch} />
        </div>

        {search ? (
          <input
            type="text"
            autoFocus
            onBlur={handleToggleSearch}
            onKeyPress={handleSearch}
          />
        ) : null}
      </SearchMenu>
    </Head>
  );
}
