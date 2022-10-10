const yup = require("yup");

// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const userSignupValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required(),

  // 🚩
  // profile_image: yup
  //   .mixed()
  //   .required("File is required")
  //   .test('profile_image', "File Size is too large. Maximum image size is 2MB", (value) =>
  //     value ? value.size <= 2 * 1024 * 1024 : true
  //   )
  //   .test("fileType", "Unsupported File Format", (value) =>
  //     value ? SUPPORTED_FORMATS.includes(value.type) : true
  //   ),
  // 🚩
});

const userLoginValidation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required(),
});

module.exports = {
  userSignupValidation,
  userLoginValidation,
};
