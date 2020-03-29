import './style.css';
import React from 'react';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props =>
    <span className="delete-btn" {...props} role="button" tabIndex="0">
        ✗
    </span>;
export default DeleteBtn;
