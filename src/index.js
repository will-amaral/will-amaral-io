import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-snapshot';
import 'assets/sass/main.scss';
import App from 'App';
import * as serviceWorker from 'serviceWorker';

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
