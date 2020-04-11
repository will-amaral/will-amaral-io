import React from 'react';

import DevWrapper from 'containers/DevWrapper';

const YouTubePlayer = () => {
  return (
    <DevWrapper>
      <h1 className='major'>YouTube Player</h1>
      <p>
        Desenvolvido pensando em conceitos mais avançados de React, como a utilização de
        Design Systems externos, Context e acesso a apis externas, este clone do YouTube é
        um bom ponto de partida para quem deseja criar a sua própria interface de vídeos.
        O código está disponível em:{' '}
        <a href='https://github.com/will-amaral/video-clone'>
          github.com/will-amaral/video-clone
        </a>{' '}
        e você pode ver a aplicação completa com estilos responsiveos em:{' '}
        <a href='https://will-amaral.github.io/video-clone'>
          will-amaral.github.io/video-clone
        </a>
      </p>
      <section>
        <iframe
          style={{ width: '100%', height: '130vh' }}
          src='https://will-amaral.github.io/video-clone'
          frameborder='0'
        ></iframe>
      </section>
    </DevWrapper>
  );
};

export default YouTubePlayer;
