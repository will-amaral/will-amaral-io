import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Section from 'containers/Section';
import Feature from 'components/Feature';
import Wrapper from 'containers/Wrapper';

import { features } from 'data';

const Habilidades = () => (
  <Wrapper>
    <Helmet>
      <title>Willian Amaral - O que eu faço</title>
      <meta name='description' content='Home Page' />
    </Helmet>
    <Section className='style3 fade-up'>
      <h2>O que eu faço</h2>
      <p>Conheça algumas dos meus serviços e áreas de atuação.</p>
      <div className='features'>
        {features.map((item) => (
          <Feature
            key={item.title}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <ul className='actions'>
        <li>
          <Link to='/contato' className='button scrolly'>
            Entrar em contato
          </Link>
        </li>
      </ul>
    </Section>
  </Wrapper>
);

export default Habilidades;
