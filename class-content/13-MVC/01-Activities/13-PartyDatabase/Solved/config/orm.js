'use strict';

const connection = require('./connection.js');

const orm = {
  select: function (whatToSelect, tableInput) {
    let queryString = 'SELECT ?? FROM ??';
    connection.query(queryString, [whatToSelect, tableInput], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere: function (tableInput, colToSearch, valOfCol) {
    let queryString = 'SELECT * FROM ?? WHERE ?? = ?';

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
  leftJoin: function (
    whatToSelect,
    tableOne,
    tableTwo,
    onTableOneCol,
    onTableTwoCol
  ) {
    let queryString = 'SELECT ?? FROM ?? AS tOne';
    queryString += ' LEFT JOIN ?? AS tTwo';
    queryString += ' ON tOne.?? = tTwo.??';

    console.log(queryString);

    connection.query(
      queryString,
      [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
