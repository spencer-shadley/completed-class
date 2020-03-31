import React from 'react';

const UserContext = React.createContext({
  user: {},
  capitalizeFirstLetter: () => {},
  handleBtnClick: () => {}
});

export default UserContext;
