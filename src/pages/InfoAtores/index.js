import React, { useEffect } from 'react';

import { Container, Title } from './style';

export default function InfoAtores({ location: { state } }) {
  useEffect(() => {
    console.log(state);
    window.history.pushState(null, null, document.URL);
  }, [state]);

  function handleReturn() {
    window.history.go(-1);
  }

  return (
    <Container>
      <Title onClick={handleReturn}>{state.name}</Title>
    </Container>
  );
}
