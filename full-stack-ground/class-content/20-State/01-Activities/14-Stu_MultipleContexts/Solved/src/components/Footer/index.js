import './style.css';

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <span>LinkedUp {new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
