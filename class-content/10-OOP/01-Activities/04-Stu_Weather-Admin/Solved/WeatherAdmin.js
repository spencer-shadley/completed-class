'use strict';

const fs = require('fs');
const UserSearch = require('./UserSearch');
const moment = require('moment');

const WeatherAdmin = function() {
  this.getData = function() {
    fs.readFile('log.txt', 'utf8', function(error, data) {
      console.log(data);
    });
  };

  this.newUserSearch = function(name, location) {
    const newUserSearch = new UserSearch(name, location);
    const logTxt =
      '\nName: ' +
      newUserSearch.name +
      ' Location: ' +
      newUserSearch.location +
      ' Date: ' +
      moment(newUserSearch.date).format('MM-DD-YYYY');

    fs.appendFile('log.txt', logTxt, function(err) {
      if (err) throw err;
    });

    newUserSearch.getWeather();
  };
};

module.exports = WeatherAdmin;
