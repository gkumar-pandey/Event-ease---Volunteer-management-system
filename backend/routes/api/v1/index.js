const express = require("express");
const volunteerRoutes = require("./volunteer.route");
const eventRoutes = require("./event.route");
const routes = express.Router();

routes.use("/volunteers", volunteerRoutes);
routes.use("/events", eventRoutes);

module.exports = routes;
