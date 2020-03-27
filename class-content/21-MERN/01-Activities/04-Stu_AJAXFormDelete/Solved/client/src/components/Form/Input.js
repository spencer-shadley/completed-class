import PropTypes from 'prop-types';
import React from 'react';

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}
