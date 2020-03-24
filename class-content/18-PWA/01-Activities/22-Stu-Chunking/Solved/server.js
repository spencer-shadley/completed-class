const express = require(`express`);
const mongoose = require(`mongoose`);

const apiRoutes = require(`./routes/apiRoutes`);
const htmlRoutes = require(`./routes/htmlRoutes`);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiRoutes(app);
htmlRoutes(app);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/imageperformance`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/imageperformance`,
  { useNewUrlParser: true }
);

app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
