import './style.css';

import PropTypes from 'prop-types';
import React from 'react';
import CardTitleText from '../CardTitleText';

function CardTitle() {
  return (
    <div className="heading">
      <CardTitleText />
    </div>
  );
}

export default CardTitle;
