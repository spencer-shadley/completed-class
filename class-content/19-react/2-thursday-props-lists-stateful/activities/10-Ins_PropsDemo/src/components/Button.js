import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  console.log(props);

    return (
        <button className={`btn btn-${props.type}`}>
            {props.children}
        </button>);
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};

export default Button;
