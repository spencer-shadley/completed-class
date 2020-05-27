import PropTypes from 'prop-types';
import React from 'react';

function Col(props) {
    const size = props.size
        .split(` `)
        .map(s => `col-${ s}`)
        .join(` `);

    return <div className={size} {...props} />;
}
Col.propTypes = {
    size: PropTypes.string
};

export default Col;
