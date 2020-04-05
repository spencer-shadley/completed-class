import PropTypes from 'prop-types';
import React from 'react';

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = `default`, className, children, onClick }) {
    return (
        <button
            onClick={onClick}
            className={[`btn btn-lg`, `btn-${type}`, className].join(` `)}
        >
            {children}
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
};

export default Button;
