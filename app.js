require("dotenv").config();
const express = require("express");
const app = express();
const nconf = require("nconf");

nconf.use("memory");

app.use("view engine", "pug");

app.listen(process.env.PORT, () => {
  console.log(`Start PORT: ${process.env.PORT}`);
});
