const yup = require("yup");

const scheduleValidation = yup.object({
  // create_by: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().min(5).max(250).required(),
  time: yup.string().required(),
  meet_channels: yup.string().required(),
  link: yup.string().required(),
  participant: yup.string().email().required(),
});

module.exports = {
  scheduleValidation,

};

