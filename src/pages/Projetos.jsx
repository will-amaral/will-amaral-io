import React from 'react';
import { Helmet } from 'react-helmet';

import Spotlight from 'components/Spotlight';
import Wrapper from 'containers/Wrapper';

import { spotlights } from 'data';

const Projetos = () => (
  <Wrapper>
    <Helmet>
      <title>Willian Amaral - Meus projetos</title>
      <meta name='description' content='Home Page' />
    </Helmet>
    <section id='one' className='wrapper style2 spotlights'>
      {spotlights.map((item) => (
        <Spotlight
          key={item.title}
          title={item.title}
          content={item.content}
          link={item.link}
          linkText={item.linkText}
          img={item.img}
        />
      ))}
    </section>
  </Wrapper>
);

export default Projetos;
