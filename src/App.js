import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Style, { Container } from './style';

import Opening from './components/Opening';
import Header from './components/Header';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div
      style={{
        overflowY: `${loading ? 'hidden' : 'visible'}`,
        height: '100vh',
      }}
    >
      <Style />
      {loading ? <Opening /> : null}
      <Container>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </Container>
    </div>
  );
}
