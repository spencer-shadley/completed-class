import './List.css';
import PropTypes from 'prop-types';
import React from 'react';

export function List({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}
List.propTypes = {
    children: PropTypes.node
};
