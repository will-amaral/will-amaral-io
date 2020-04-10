import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from 'components/Sidebar';

const Wrapper = (props) => {
  return (
    <>
      <Sidebar />
      <div id='wrapper'>{props.children}</div>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
