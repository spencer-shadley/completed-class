import './style.css';

import PropTypes from 'prop-types';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <span>LinkedUp {new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
