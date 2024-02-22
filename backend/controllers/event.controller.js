const Event = require("../model/event.model");

const readEventsHandler = async (req, res) => {
  try {
    const events = await Event.find({});
    if (!events) {
      return res
        .status(404)
        .json({ success: false, message: "Events data not found" });
    }
    return res.status(200).json({ success: true, events: events });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

const addNewEventHandler = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = new Event(eventData);
    if (!newEvent) {
      return res
        .status(404)
        .json({ success: false, message: "Event not created." });
    }
    await newEvent.save();
    return res
      .status(201)
      .json({ success: true, message: "Event created.", event: newEvent });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

const editEventHandler = async (req, res) => {
  try {
    const { eventId } = req.params;
    const updateData = req.body;
    const foundEvent = await Event.findById(eventId);

    if (!foundEvent) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found." });
    }
    const updatedEvent = await Event.findByIdAndUpdate(eventId, updateData, {
      new: true,
    });
    return res
      .status(200)
      .json({ success: true, message: "Event updated.", event: updatedEvent });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

const deleteEventHandler = async (req, res) => {
  try {
    const { eventId } = req.params;
    const foundEvent = await Event.findById(eventId);
    if (!foundEvent) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found." });
    }
    await Event.findByIdAndDelete(eventId);
    return res.status(200).json({ success: true, message: "Event deleted." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

module.exports = {
  readEventsHandler,
  editEventHandler,
  deleteEventHandler,
  addNewEventHandler,
};
