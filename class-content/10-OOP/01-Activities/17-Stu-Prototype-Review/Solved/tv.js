'use strict';

const axios = require('axios');
const fs = require('fs');
const util = require('util');

const fsAppendFile = util.promisify(fs.appendFile);

// Create the TV constructor
const TV = function() {};
TV.prototype.findActor = async actor => {
  const URL = 'http://api.tvmaze.com/search/people?q=' + actor;

  try {
    const response = await axios.get(URL);
    const actorData = [
      'Name: ' + response.data[0].person.name,
      'Birthday: ' + response.data[0].person.birthday,
      'Gender: ' + response.data[0].person.gender,
      'Country: ' + response.data[0].person.country.name,
      'URL: ' + response.data[0].person.url,
      '-'.repeat(60)
    ].join('\n\n');

    await fsAppendFile('log.txt', actorData);
    console.log(actorData);
  } catch (err) {
    console.error(err);
  }
};

TV.prototype.findShow = async show => {
  const URL = 'http://api.tvmaze.com/singlesearch/shows?q=' + show;

  try {
    const response = await axios.get(URL);
    const showData = [
      'Show: ' + response.data.name,
      'Genre(s): ' + response.data.genres.join(', '),
      'Rating: ' + response.data.rating.average,
      'Network: ' + response.data.network.name,
      'Summary: ' + response.data.summary,
      '-'.repeat(60)
    ].join('\n\n');

    await fsAppendFile('log.txt', showData);
    console.log(showData);
  } catch (err) {
    console.error(err);
  }
};

module.exports = TV;
