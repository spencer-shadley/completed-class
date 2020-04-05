import './style.css';
import PropTypes from 'prop-types';
import React from 'react';

// This file exports both the List and ListItem components

export function List({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}
List.propTypes = {
    children: PropTypes.children
};

export function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}
ListItem.propTypes = {
    children: PropTypes.children
};
