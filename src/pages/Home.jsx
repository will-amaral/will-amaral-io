import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Section from 'containers/Section';
import Wrapper from 'containers/Wrapper';

const Home = () => (
  <Wrapper>
    <Helmet>
      <title>Willian Amaral - Jornalista, Designer e Desenvolvedor</title>
      <meta
        name='description'
        content='Jornalista Digital, Willian Amaral é especialista em 
		tecnologia e informação. Atua como desenvolvedor javascript, em especial com ReactJS e NodeJS'
      />
    </Helmet>
    <Section id='intro' className='style1 fullscreen fade-up'>
      <h1>Willian Amaral</h1>
      <p>
        Jornalista Digital, Deisgner Gráfico e Desenvolvedor de Sistemas,
        <br />
        sou especialista em tecnologia e comunicação. Trabalho com{' '}
        <a href='https://reactjs.org'>ReactJS</a> e{' '}
        <a href='https://nodejs.org'>NodeJS</a>.
      </p>
      <ul className='actions'>
        <li>
          <Link to='/habilidades' className='button scrolly'>
            Saiba mais
          </Link>
        </li>
      </ul>
    </Section>
  </Wrapper>
);

export default Home;
