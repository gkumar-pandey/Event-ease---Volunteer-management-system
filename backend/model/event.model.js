const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
    },
    event_address: {
      type: {
        venue: {
          type: String,
        },
        address: {
          street: {
            type: String,
          },
          city: {
            type: String,
          },
          state: {
            type: String,
          },
          country: {
            type: String,
          },
        },
      },
    },
    roles: {
      type: [
        {
          role: {
            type: String,
          },
          requiredVolunteer: {
            type: Number,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
