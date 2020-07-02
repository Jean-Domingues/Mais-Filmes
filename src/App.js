import React, { useState, useEffect } from 'react';
import Style, { Container } from './style';

import Opening from './components/Opening';
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <Style />
      {loading ? (
        <Opening />
      ) : (
          <Container>
            <Header />
            <Home />
          </Container>
        )}
    </>
  );
}
