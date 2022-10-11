const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  profile_image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.statics.signup = async function (email, password, name) {
  const exists = await this.findOne({ email });
  // validation
  // if (!email || !password) {
  //   throw Error("All fields must be filled");
  // }
  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash, name });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid action");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid action");
  }

  return user;
};

module.exports = mongoose.model("CalendlyUser", userSchema);
