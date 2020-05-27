'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define(`Todo`, {
  text: {
    type: DataTypes.STRING
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});
