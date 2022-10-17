const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  create_by: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  meet_channels: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  participant: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Schedule", scheduleSchema);
