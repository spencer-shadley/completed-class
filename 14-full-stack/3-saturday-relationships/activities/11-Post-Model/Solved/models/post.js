'use strict';

module.exports = (sequelize, DataTypes) => {
  const maxTitleLength = 160;
  const Post = sequelize.define(`Post`, {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, maxTitleLength]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: `Personal`
    }
  });
  return Post;
};
