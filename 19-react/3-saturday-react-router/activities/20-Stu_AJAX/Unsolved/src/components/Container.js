import React from 'react';

function Container(props) {
    return (
        <div className={`container${props.fluid ? `-fluid` : ``}`}>
            {props.children}
        </div>
    );
}

Container.propTypes = {
    children: Array,
    fluid: String
};

export default Container;
