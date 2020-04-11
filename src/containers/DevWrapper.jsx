import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

const DevWrapper = (props) => {
  return (
    <>
      <Header />
      <div id='wrapper'>
        <section id='main' className='wrapper'>
          <div className='inner'>{props.children}</div>
        </section>
      </div>
      <Footer alt />
    </>
  );
};

DevWrapper.propTypes = {
  children: PropTypes.node,
};

export default DevWrapper;
