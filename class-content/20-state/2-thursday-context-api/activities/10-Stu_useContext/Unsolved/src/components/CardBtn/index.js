import './style.css';
import PropTypes from 'prop-types';
import React from 'react';

function CardBtn(props) {
    return (
        <button
            onClick={props.onClick}
            className={`card-btn ${props[`data-value`]}`}
            {...props}
        />
    );
}
CardBtn.propTypes = {
    onClick: PropTypes.func
};

export default CardBtn;
