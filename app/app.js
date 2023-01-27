"use strict";

// module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// routing
const home = require("./src/routes/home");

// app, setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

// use -> method to register middleware
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // troubleshoot url data not being properly recognized

app.use("/", home);

module.exports = app;