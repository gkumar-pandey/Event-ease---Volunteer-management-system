const Volunteer = require("../model/volunteer.model");

const readVolunteersHandler = async (req, res) => {
  try {
    const volunteers = await Volunteer.find({});
    if (!volunteers) {
      return res
        .status(404)
        .json({ success: false, message: "Volunteers data not found" });
    }
    return res.status(200).json({ success: true, volunteers });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

const addNewVolunteerHandler = async (req, res) => {
  try {
    const volunteerData = req.body;
    const newVolunteer = new Volunteer(volunteerData);
    if (!newVolunteer) {
      return res
        .status(404)
        .json({ success: false, message: "Volunteer not created." });
    }
    await newVolunteer.save();
    return res.status(201).json({
      success: true,
      message: "Volunteer created.",
      volunteer: newVolunteer,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

const editVolunteerHandler = async (req, res) => {
  try {
    const { volunteerId } = req.params;
    const updateData = req.body;
    const foundVolunteer = await Volunteer.findById(volunteerId);

    if (!foundVolunteer) {
      return res
        .status(404)
        .json({ success: false, message: "Volunteer not found." });
    }
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      volunteerId,
      updateData,
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Event updated.",
      volunteer: updatedVolunteer,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

const deleteVolunteerHandler = async (req, res) => {
  try {
    const { volunteerId } = req.params;
    const foundVolunteer = await Volunteer.findById(volunteerId);
    if (!foundVolunteer) {
      return res
        .status(404)
        .json({ success: false, message: "Volunteer not found." });
    }
    await Volunteer.findByIdAndDelete(volunteerId);
    return res
      .status(200)
      .json({ success: true, message: "Volunteer deleted." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw new Error(error);
  }
};

module.exports = {
  readVolunteersHandler,
  editVolunteerHandler,
  addNewVolunteerHandler,
  deleteVolunteerHandler,
};
