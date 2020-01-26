'use strict';

// We're incorporating an npm package for doing weather searches.
var weather = require('weather-js');

// Creates a UserSearch Constructor
var UserSearch = function(name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.Now();

  this.getWeather = function() {
    weather.search({ search: this.location, degreeType: 'F' }, function(
      err,
      result
    ) {
      if (err) {
        console.error(err);
      }
      console.log(JSON.stringify(result, null, 2));
    });
  };
};

module.exports = UserSearch;
