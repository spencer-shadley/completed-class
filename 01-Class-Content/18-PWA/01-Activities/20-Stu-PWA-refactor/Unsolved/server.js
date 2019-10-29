var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_bjt6g1q4:93gkpkv3gdv7tjmaarmpl4f7k2@ds157946.mlab.com:57946/heroku_bjt6g1q4",
  { useNewUrlParser: true }
);

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
