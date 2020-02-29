'use strict';

module.exports = (sequelize, DataTypes) =>
  sequelize.define(`Todo`, {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
