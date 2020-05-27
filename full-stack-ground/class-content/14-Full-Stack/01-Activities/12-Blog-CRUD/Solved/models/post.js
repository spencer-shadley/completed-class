'use strict';

module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define(`Post`, {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1],
          msg: `A title must be provided`
        }
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [1],
          msg: `A body must be provided`
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: `Personal`
    }
  });
  return Post;
};
