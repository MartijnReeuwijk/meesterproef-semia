const express = require("express"),
  request = require("request"),
  bodyParser = require("body-parser"),
  app = express(),
  http = require("http").Server(app),
  port = process.env.PORT || 5000,
  fs = require("fs"),
  rp = require("request-promise");

  app
  .set("view engine", "ejs")
  .set("views", "views")

  .use(express.static("static/"))
  .use(bodyParser.urlencoded({
    extended: true
  }))

  // .get("/", function );

  http.listen(port, () => {
    console.log(port);
  });
