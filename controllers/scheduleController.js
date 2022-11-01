const ScheduleModel = require("../models/scheduleModel");


// create a schedule
const createSchedule = async (req, res) => {
  const { title, description, time, meet_channels, link, participant } =
    req.body;
  try {
    const user_id = req.user;
    console.log("reqAuthId", user_id);

    const schedule = await ScheduleModel.create({
      create_by:user_id, //:req.user,
      title,
      description,
      time,
      meet_channels,
      link,
      participant,
    });
    res.status(200).json({
      schedule,
      message: "Schedule was inserted successfully!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all schedules
const getSchedules = async (req, res) => {
  try {
    const schedules = await ScheduleModel.find({});
    res.status(200).json({
      schedules,
      message: "Schedules gets successfully!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a schedule
const getSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await ScheduleModel.findById({ _id:id });
    if (!schedule) {
      return res.status(400).json({ error: "Not such a Schedule." });
    } else {
      res.status(200).json({
        schedule,
        message: "Schedule gets successfully!",
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a schedule
const updateSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await ScheduleModel.findOneAndUpdate(
      { _id:id },
      {
        $set: {
          title: req.body?.title,
          description: req.body?.description,
          time: req.body?.time,
          meet_channels: req.body?.meet_channels,
          link: req.body?.link,
          participant: req.body?.participant,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if (!schedule) {
      return res.status(400).json({ error: "Not such a schedule." });
    } else {
      res.status(200).json(schedule);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a Schedule
const deleteSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await ScheduleModel.findOneAndDelete({ _id:id });
    if (!schedule) {
      return res.status(400).json({ error: "Not such a schedule." });
    } else {
      res.status(200).json({
        schedule,
        message: "Schedule deleted successfully!",
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createSchedule,
  getSchedules,
  getSchedule,
  updateSchedule,
  deleteSchedule,
};
