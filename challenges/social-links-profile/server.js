const express = require("express");
const path = require("path");
const pkg = require("./package.json");

const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const app = express();
const port = pkg.config.port;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

app.use(connectLiveReload());

app.use(express.static("public"));

app.get(`/${pkg.name}`, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
