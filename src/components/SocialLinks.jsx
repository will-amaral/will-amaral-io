import React from 'react';

const SocialLinks = () => {
  return (
    <section>
      <ul className='contact'>
        <li>
          <h3>Email</h3>
          <a href='mailto:will@amaral.io'>will@amaral.io</a>
        </li>
        <li>
          <h3>Telefone</h3>
          <span>(12) 99603-2167</span>
        </li>
        <li>
          <h3>Mídias Sociais</h3>
          <ul className='icons'>
            <li>
              <a href='https://twitter.com/willamaral_io' className='fab fa-twitter'>
                <span className='label'>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/willian.amaral'
                className='fab fa-facebook'
              >
                <span className='label'>Facebook</span>
              </a>
            </li>
            <li>
              <a href='https://github.com/will-amaral' className='fab fa-github'>
                <span className='label'>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/will.amaral.io/'
                className='fab fa-instagram'
              >
                <span className='label'>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/willian-amaral/'
                className='fab fa-linkedin'
              >
                <span className='label'>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href='https://www.behance.net/will-amaral' className='fab fa-behance'>
                <span className='label'>Behance</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default SocialLinks;
