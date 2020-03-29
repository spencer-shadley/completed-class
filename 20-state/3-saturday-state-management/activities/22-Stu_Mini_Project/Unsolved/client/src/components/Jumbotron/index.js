import PropTypes from 'prop-types';
import React from 'react';

const Jumbotron = ({ children }) =>
    <div
        style={{
            height: 560,
            clear: `both`,
            paddingTop: 120,
            textAlign: `center`
        }}
        className="jumbotron border border-success"
    >
        {children}
    </div>;

Jumbotron.propTypes = {
    children: PropTypes.children
};

export default Jumbotron;
