import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  return (
    <section
      id={props.id ? props.id : undefined}
      className={`wrapper ${props.className ? props.className : ''}`}
    >
      <div className='inner'>{props.children}</div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;
