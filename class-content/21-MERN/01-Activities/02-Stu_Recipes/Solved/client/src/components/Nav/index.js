import './style.css';

import PropTypes from 'prop-types';
import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        React Recipes
      </a>
    </nav>
  );
}

export default Nav;
