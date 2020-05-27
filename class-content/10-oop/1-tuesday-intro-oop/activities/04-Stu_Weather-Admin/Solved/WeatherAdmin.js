'use strict';

const fs = require('fs');
const UserSearch = require('./UserSearch'); // must use relative path
const moment = require('moment');

function WeatherAdmin() {
  this.getData = () => {
    fs.readFile('log.txt', 'utf8', (error, data) => console.log(data)); // error data is first
  };

  this.newUserSearch = (name, location) => {
    const newUserSearch = new UserSearch(name, location);
    const logTxt =
      '\nName: ' +
      newUserSearch.name +
      ' Location: ' +
      newUserSearch.location +
      ' Date: ' +
      moment(newUserSearch.date).format('MM-DD-YYYY');

    fs.appendFile('log.txt', logTxt, err => {
      if (err) throw err;
    });

    newUserSearch.getWeather();
  };
}

module.exports = WeatherAdmin;
