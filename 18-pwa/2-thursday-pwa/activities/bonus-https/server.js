const express = require(`express`);
const fs = require(`fs`);
const https = require(`https`);

const htmlRoutes = require(`./routes/htmlRoutes`);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`client`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRoutes(app);

const httpsServer = https.createServer({
  key: fs.readFileSync(`./key.pem`),
  cert: fs.readFileSync(`./cert.pem`)
}, app);

httpsServer.listen(PORT, () => {
  console.log(`Listening on https://localhost:${PORT}`);
});
