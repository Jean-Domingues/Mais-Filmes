import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Atores from './pages/Atores';
import Filmes from './pages/Filmes';
import Info from './pages/Info';
import Series from './pages/Series';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/filmes" component={Filmes} />
      <Route exact path="/series" component={Series} />
      <Route exact path="/atores" component={Atores} />
      <Route exact path="/info" component={Info} />
    </Switch>
  );
}
