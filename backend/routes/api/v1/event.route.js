const express = require("express");
const {
  readEventsHandler,
  addNewEventHandler,
  editEventHandler,
  deleteEventHandler,
} = require("../../../controllers/event.controller");
const eventRoutes = express.Router();

// GET /api/v1/events - Fetch events
eventRoutes.get("/", readEventsHandler);

// POST /api/v1/events - create new event
eventRoutes.post("/", addNewEventHandler);

// POST /api/v1/events/:eventId - update event details
eventRoutes.post("/:eventId", editEventHandler);

// DELETE /api/v1/events/:eventId - Delete a event
eventRoutes.delete("/:eventId", deleteEventHandler);

module.exports = eventRoutes;
