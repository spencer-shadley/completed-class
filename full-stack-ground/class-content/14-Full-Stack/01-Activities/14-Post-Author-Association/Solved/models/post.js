'use strict';

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(`Post`, {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = models => {
    // A Post should belong to an Author
    Post.belongsTo(models.Author, {
      foreignKey: {
        // A Post can't be created without an Author due to the foreign key constraint
        allowNull: false
      }
    });
  };

  return Post;
};
