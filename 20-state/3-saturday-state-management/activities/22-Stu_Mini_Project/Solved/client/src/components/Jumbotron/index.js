import PropTypes from 'prop-types';
import React from 'react';

function Jumbotron({ children }) {
    return (
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
        </div>
    );
}
Jumbotron.propTypes = {
    children: PropTypes.node
};

export default Jumbotron;
