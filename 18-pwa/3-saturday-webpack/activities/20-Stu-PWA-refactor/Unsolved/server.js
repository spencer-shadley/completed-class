'use strict';

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://heroku_bjt6g1q4:93gkpkv3gdv7tjmaarmpl4f7k2@ds157946.mlab.com:57946/heroku_bjt6g1q4',
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
