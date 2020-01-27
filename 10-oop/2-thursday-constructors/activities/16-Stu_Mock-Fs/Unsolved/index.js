'use strict';

const FileIO = require('./fileIO');

const fileIO = new FileIO();

const fileName = 'message.txt';

fileIO.write(fileName, 'Hello World!');

const message = fileIO.read(fileName);

console.log(message);
