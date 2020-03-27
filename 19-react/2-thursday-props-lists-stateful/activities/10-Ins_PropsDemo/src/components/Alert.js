import PropTypes from 'prop-types';
import React from 'react';

function Alert(props) {
    console.log(props);

    return (
        <div className={`alert alert-${props.type}`} role="alert">
            {props.children}
        </div>
    );
}

Alert.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string
};

export default Alert;
