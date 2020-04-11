import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';

import Routes from 'Routes';

const App = () => {
  useEffect(() => {
    const body = document.querySelector('body').classList;
    const timer = setTimeout(() => {
      body.remove('is-preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Switch>
      <Routes />
    </Switch>
  );
};

export default App;
