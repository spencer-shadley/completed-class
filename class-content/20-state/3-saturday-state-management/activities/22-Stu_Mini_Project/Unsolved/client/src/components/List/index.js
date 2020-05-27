import './style.css';

import PropTypes from 'prop-types';
import React from 'react';

// This file exports both the List and ListItem components

export const List = ({ children }) =>
    <div className="list-overflow-container">
        <ul className="list-group">{children}</ul>
    </div>;

List.propTypes = {
    children: PropTypes.node
};

export const ListItem = ({ children }) => <li className="list-group-item">{children}</li>;

ListItem.propTypes = {
    children: PropTypes.node
};
