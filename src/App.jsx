import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Wrapper from 'containers/Wrapper';

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/sobre'>
            <Home />
          </Route>
          <Route exact path='/projetos'>
            <Home />
          </Route>
          <Route exact path='/contatos'>
            <Home />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default App;
