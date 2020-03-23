'use strict';

const express = require(`express`);
const mongoose = require(`mongoose`);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(`./routes/apiRoutes`)(app);
require(`./routes/htmlRoutes`)(app);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/serviceWorkerDemo`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, () => console.log(`Now listening on port: http://localhost:${PORT}`));
