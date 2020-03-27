import PropTypes from 'prop-types';
import React from 'react';

const LanguageContext = React.createContext({
  language: '',
  handleBtnClick: () => {}
});

export default LanguageContext;
