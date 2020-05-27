import './style.css';

import React from 'react';

function Title(props) {
    return <h1 className="title">{props.children}</h1>;
}

Title.propTypes = {
    children: Array
};

export default Title;
