'use strict';

const orm = require('./config/orm.js');

const data = orm.selectWhere('parties', 'party_type', 'grown-up');

console.log(data); // Data is undefined. Why?
