import PropTypes from 'prop-types';
import React from 'react';

const Alert = props =>
    <div
        role="alert"
        className={`alert alert-${props.type} fade in`}
        style={{ width: `80%`, margin: `0 auto`, marginTop: 18, ...props.style }}
    >
        {props.children}
    </div>;
Alert.propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    type: PropTypes.string
};

export default Alert;
