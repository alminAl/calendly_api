const yup = require("yup");

const userSignupValidation = yup.object({
  password: yup.string().min(4).max(10).required(),
  email: yup.string().required(),
  name: yup.string().required(),
});

module.exports = userSignupValidation;
