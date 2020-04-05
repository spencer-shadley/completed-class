import PropTypes from 'prop-types';
import React from 'react';

function Jumbotron({ children }) {
    return (
        <div
            style={{
                height: 300,
                clear: `both`,
                paddingTop: 120,
                textAlign: `center`
            }}
            className="jumbotron"
        >
            {children}
        </div>
    );
}
Jumbotron.propTypes = {
    children: PropTypes.node
};

export default Jumbotron;
