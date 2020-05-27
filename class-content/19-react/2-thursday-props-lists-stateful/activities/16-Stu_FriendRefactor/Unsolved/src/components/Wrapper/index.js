import './style.css';

import React from 'react';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

Wrapper.propTypes = {
    children: Array
};

export default Wrapper;
