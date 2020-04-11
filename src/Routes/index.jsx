import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'pages/Home';
import Projetos from 'pages/Projetos';
import Habilidades from 'pages/Habilidades';
import Contato from 'pages/Contato';
import Dev from 'pages/Dev';

import MarkdownEditor from 'apps/MarkdownEditor';

const Routes = () => {
  return (
    <>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/habilidades'>
        <Habilidades />
      </Route>
      <Route exact path='/projetos'>
        <Projetos />
      </Route>
      <Route exact path='/contato'>
        <Contato />
      </Route>
      <Route exact path='/dev'>
        <Dev />
      </Route>
      <Route exact path='/dev/markdown'>
        <MarkdownEditor />
      </Route>
    </>
  );
};

export default Routes;
