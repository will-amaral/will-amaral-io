import React from 'react';
import PropTypes from 'prop-types';

const Spotlight = (props) => {
  return (
    <section>
      <a
        href={props.link}
        className='image'
        style={{
          backgroundImage: `url(${props.img.props.src})`,
          backgroundPosition: props.img.props['data-position'],
        }}
      >
        {props.img}
      </a>
      <div className='content'>
        <div className='inner'>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <ul className='actions'>
            <li>
              <a href={props.link} className='button'>
                {props.linkText}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

Spotlight.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  content: PropTypes.string,
  linkText: PropTypes.string,
  img: PropTypes.node,
};

export default Spotlight;
