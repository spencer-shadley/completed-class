var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

<<<<<<< HEAD:01-Class-Content/18-PWA/01-Activities/15-Stu_Installable-Apps/Unsolved/server.js
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});
=======
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/webpackplugin",
  { useNewUrlParser: true }
);
>>>>>>> Cleaned up activities based on feedback:01-Class-Content/18-web-performance/01-Activities/16-Stu-Webpack-Plugin/Unsolved/server.js

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
