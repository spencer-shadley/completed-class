import './style.css';

import PropTypes from 'prop-types';
import React from 'react';

function Wrapper(props) {
  return <main className="wrapper" {...props} />;
}

export default Wrapper;
