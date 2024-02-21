const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
    },
    isAvailable: {
      type: Boolean,
    },
    interests: {
      type: [String],
    },
    events: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
    },
  },
  { timestamps: true }
);

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
