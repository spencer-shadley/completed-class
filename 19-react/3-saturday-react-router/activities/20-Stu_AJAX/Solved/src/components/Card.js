import PropTypes from 'prop-types';
import React from 'react';

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string
}

export default Card;
