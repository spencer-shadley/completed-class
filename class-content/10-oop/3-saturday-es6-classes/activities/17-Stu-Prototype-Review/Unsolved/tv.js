'use strict';

const axios = require('axios');
const fs = require('fs');
const util = require('util');

const fsAppendFile = util.promisify(fs.appendFile);

// Create the TV constructor
const TV = function() {};

// Find a tv show actor

// Find a tv show
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
