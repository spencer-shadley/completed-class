import NavLink from './NavLink';

import PropTypes from 'prop-types';
import React from 'react';

function Nav(props) {
    return (
        <div
            style={{
                width: `100%`,
                padding: `30px`,
                marginBottom: `30px`,
                backgroundColor: props.theme === `dark` ? `#000099` : `white`,
                color: props.theme === `dark` ? `white` : `black`
            }}
        >
            <NavLink />
        </div>
    );
}
Nav.propTypes = {
    theme: PropTypes.string
};

export default Nav;
