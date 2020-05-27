'use strict';

const express = require(`express`);
const expressHandlebars = require(`express-handlebars`);

const db = require(`./models`);

const apiRoutes = require(`./routes/api-routes.js`);
const htmlRoutes = require(`./routes/html-routes.js`);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(`public`));

app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

apiRoutes(app);
htmlRoutes(app);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Hello, world!`));
});

