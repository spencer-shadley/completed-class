'use strict';

const connection = require('../config/connection.js');

const orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    const queryString = 'SELECT * FROM ?? WHERE ?? = ?';

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(
      err,
      result
    ) {
      if (err) throw err;
      return result;
    });
  }
};

module.exports = orm;
