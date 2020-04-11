import React from 'react';

import pic01 from 'assets/img/pic01.jpg';
import pic02 from 'assets/img/pic02.jpg';
import pic03 from 'assets/img/pic03.jpg';

export const features = [
  {
    icon: 'code',
    title: 'Desenolvimento',
    content:
      'Desenvolvimento Web Full-Stack com especialidade em JavaScript,' +
      ' em especial a biblioteca ReactJS e a framework NodeJS.',
  },
  {
    icon: 'pen-nib',
    title: 'Reportagem e Redação',
    content:
      'Produção de conteúdo textual como redator e repóter,' +
      ' para blogs, revistas e jornais.',
  },
  {
    icon: 'paint-brush',
    title: 'Design',
    content:
      'Desenvolvimento Web Full-Stack com especialidade em JavaScript,' +
      ' em especial a biblioteca ReactJS e a framework NodeJS.',
  },
  {
    icon: 'camera',
    title: 'Audiovisual',
    content:
      'Desenvolvimento Web Full-Stack com especialidade em JavaScript,' +
      ' em especial a biblioteca ReactJS e a framework NodeJS.',
  },
];

export const spotlights = [
  {
    link: 'https://will.amaral.io/blog',
    linkText: 'Visite o blog',
    title: 'Histórias',
    content: 'Visite o meu blog e conheça algumas das minhas histórias',
    img: (
      <img
        src={pic01}
        alt='blog'
        data-position='center center'
        style={{ display: 'none' }}
      />
    ),
  },
  {
    link: 'https://www.behance.net/will-amaral',
    linkText: 'Ver projetos no Behance',
    title: 'Produção Editorial e Gráfica',
    content: 'Você também pode apreciar alguns dos meus projetos de Design',
    img: (
      <img
        src={pic02}
        alt='drawing table'
        data-position='top center'
        style={{ display: 'none' }}
      />
    ),
  },
  {
    link: 'https://github.com/will-amaral',
    linkText: 'Ir para o Github',
    title: 'JavaScript e Desenvolvimento',
    content: 'Nem só de humanas viverás o homem. Conheça meus sistemas Open Source',
    img: (
      <img src={pic03} alt='coding' data-position='25% 25%' style={{ display: 'none' }} />
    ),
  },
];
