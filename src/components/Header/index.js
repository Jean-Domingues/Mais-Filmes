import React, { useState } from 'react';

import { FaSearch, FaCaretDown } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/logo-filmes.svg';

import { Head, LogoList, SearchMenu, LogoContainer, ArrowMenu } from './style';

export default function Header() {
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useHistory();

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

  function handleOpenMenu() {
    setOpen(!open);
  }

  return (
    <Head>
      <LogoList>
        <LogoContainer as={Link} to="/">
          <img src={Logo} alt="+Filmes" />
        </LogoContainer>

        <ArrowMenu open={open} onClick={handleOpenMenu}>
          <FaCaretDown size={22} />

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
        </ArrowMenu>

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

      <SearchMenu style={{ width: `${search ? '60%' : ''}` }}>
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
