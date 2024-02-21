const express = require("express");
const routes = express.Router();

routes.use("/api", require("./api"));

routes.get("/", (req, res) => {
  return res.json("Hello Express");
});

module.exports = routes;
