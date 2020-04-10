import React from 'react';
import PropTypes from 'prop-types';

const Feature = (props) => {
  return (
    <section>
      <span class={'icon major fa-' + props.icon}></span>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </section>
  );
};

Feature.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Feature;
