import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Section from 'containers/Section';

const Home = () => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta name='description' content='Home Page' />
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
          <Link to='/sobre' className='button scrolly'>
            Saiba mais
          </Link>
        </li>
      </ul>
    </Section>
  </>
);

export default Home;
