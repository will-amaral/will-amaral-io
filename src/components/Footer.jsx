import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <footer id='footer' className={`wrapper ${props.alt ? 'alt' : 'style1-alt'}`}>
      <div className='inner'>
        <ul className='menu'>
          <li>Willian Amaral &copy; Todos os direitos reservados.</li>
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  alt: PropTypes.bool,
};

export default Footer;
