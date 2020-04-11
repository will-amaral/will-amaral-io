import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Projetos from 'pages/Projetos';
import Contato from 'pages/Contato';
import Wrapper from 'containers/Wrapper';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const body = document.querySelector('body').classList;
    const timer = setTimeout(() => {
      body.remove('is-preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <Switch location={location}>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/sobre'>
          <Sobre />
        </Route>
        <Route exact path='/projetos'>
          <Projetos />
        </Route>
        <Route exact path='/contato'>
          <Contato />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default App;
