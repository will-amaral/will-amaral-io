import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hydrate, render } from 'react-dom';
import 'assets/sass/main.scss';
import App from 'App';
import * as serviceWorker from 'serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    rootElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
