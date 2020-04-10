import React from 'react';
import { Helmet } from 'react-helmet';

import Section from 'containers/Section';
import SocialLinks from 'components/SocialLinks';
import Form from 'components/Form';
import Footer from 'components/Footer';

const Home = () => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta name='description' content='Home Page' />
    </Helmet>
    <Section className='style1 fade-up'>
      <h2>Deixa um alô</h2>
      <p>
        Precisa de alguém para um freela, quer um orçamento, aulas particulares ou é meu
        fã e quer só dizer oi? Deixa uma mensagem no formulário abaixo, ou entre em
        contato diretamente em uma das opções abaixo.
      </p>
      <div className='split style1'>
        <Form />
        <SocialLinks />
      </div>
    </Section>
    <Footer />
  </>
);

export default Home;
