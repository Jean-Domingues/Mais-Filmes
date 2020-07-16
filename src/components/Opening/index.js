import React from 'react';

import Logo from '../../assets/logo-filmes.svg';
import { Loader } from '../../style';

import { Container } from './style';

export default function Opening() {
  return (
    <Container>
      <img src={Logo} alt="+Filmes" />
      <Loader size="45px" border="3px" />
    </Container>
  );
}
