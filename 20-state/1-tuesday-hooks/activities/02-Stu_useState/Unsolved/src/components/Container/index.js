import PropTypes from 'prop-types';
import React from 'react';

function Container(props) {
    return (
        <div className={`container${props.fluid ? `-fluid` : ``}`} {...props} />
    );
}
Container.propTypes = {
    fluid: PropTypes.string
};

export default Container;
