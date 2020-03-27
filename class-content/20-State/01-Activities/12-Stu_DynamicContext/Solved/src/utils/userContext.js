import PropTypes from 'prop-types';
import React from 'react';

const UserContext = React.createContext({
  firstname: '',
  lastname: '',
  email: '',
  language: '',
  image: '',
  capitalizeFirstLetter: () => {},
  handleBtnClick: () => {}
});

export default UserContext;
