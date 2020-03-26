import React from 'react';

function Row(props) {
    return (
        <div className={`row${props.fluid ? `-fluid` : ``}`}>{props.children}</div>
    );
}

Row.propTypes = {
    children: Array,
    fluid: String
};

export default Row;
