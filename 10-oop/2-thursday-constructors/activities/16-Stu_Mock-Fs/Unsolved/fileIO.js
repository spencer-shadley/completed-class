'use strict';

const fs = require('fs');

function FileIO() {}

FileIO.prototype.read = file => fs.readFileSync(file, 'utf8');
FileIO.prototype.write = (path, data) => fs.writeFileSync(path, data);

module.exports = FileIO;
