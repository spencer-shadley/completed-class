'use strict';

const connection = require('./connection.js');

const orm = {
  select: function(whatToSelect, tableInput) {
    const queryString = 'SELECT ?? FROM ??';
    connection.query(queryString, [whatToSelect, tableInput], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    const queryString = 'SELECT * FROM ?? WHERE ?? = ?';

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
  leftJoin: function(
    whatToSelect,
    tableOne,
    tableTwo,
    onTableOneCol,
    onTableTwoCol
  ) {
    const queryString = 'SELECT ?? FROM ?? AS tOne';
    queryString += ' LEFT JOIN ?? AS tTwo';
    queryString += ' ON tOne.?? = tTwo.??';

    console.log(queryString);

    connection.query(
      queryString,
      [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
