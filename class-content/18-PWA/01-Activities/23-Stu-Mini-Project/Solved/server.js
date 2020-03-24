

const express = require(`express`);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`client`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(`./routes/htmlRoutes.js`)(app);

app.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT}`)
);
