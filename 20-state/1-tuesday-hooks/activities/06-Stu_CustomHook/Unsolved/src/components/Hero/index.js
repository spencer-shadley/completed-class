import './style.css';
import PropTypes from 'prop-types';
import React from 'react';

function Hero(props) {
    return (
        <div
            className="hero text-center"
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
            {props.children}
        </div>
    );
}
Hero.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node
};

export default Hero;
