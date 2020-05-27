'use strict';

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(`Author`, {
    name: DataTypes.STRING
  });
  return Author;
};
