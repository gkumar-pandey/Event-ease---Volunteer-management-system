const express = require("express");
const {
  readVolunteersHandler,
  addNewVolunteerHandler,
  deleteVolunteerHandler,
  editVolunteerHandler,
} = require("../../../controllers/volunteer.controller");
const volunteerRoutes = express.Router();

// GET /api/v1/volunteers - Fetch volunteers data
volunteerRoutes.get("/", readVolunteersHandler);

// POST /api/v1/volunteers - create a volunteer
volunteerRoutes.post("/", addNewVolunteerHandler);

// POST /api/v1/volunteers/:volunteerId - Update volunteer data
volunteerRoutes.post("/:volunteerId", editVolunteerHandler);

// DELETE /api/v1/volunteers/:volunteerId - Delete a volunteer
volunteerRoutes.delete("/:volunteerId", deleteVolunteerHandler);

module.exports = volunteerRoutes;
