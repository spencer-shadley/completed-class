import './style.css';

import PropTypes from 'prop-types';
import React from 'react';

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

FriendCard.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  occupation: PropTypes.string,
  location: PropTypes.string
}

export default FriendCard;
