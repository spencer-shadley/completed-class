import PropTypes from 'prop-types';
import React from 'react';

function CardTitleText({ title }) {
    return <h2>{title}</h2>;
}
CardTitleText.propTypes = {
    title: PropTypes.string
};

export default CardTitleText;
