import PropTypes from 'prop-types';
import React from 'react';

export function FormBtn(props) {
    return (
        <button
            {...props}
            style={{ float: `right`, marginBottom: 10 }}
            className="btn btn-success"
        >
            {props.children}
        </button>
    );
}
FormBtn.propTypes = {
    children: PropTypes.node
};

