import './style.css';

import PropTypes from 'prop-types';
import React from 'react';
import CardTitleText from '../CardTitleText';

function CardTitle({ title }) {
  return (
    <div className="blue text-center">
      <CardTitleText title={title} />
    </div>
  );
}

export default CardTitle;
