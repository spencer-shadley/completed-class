import PropTypes from 'prop-types';
import React from 'react';

function Container(props) {
  return (
    <div className={`container${props.fluid ? '-fluid' : ''}`}>
      {props.children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.string
}

export default Container;
