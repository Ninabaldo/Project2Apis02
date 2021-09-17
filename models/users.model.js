const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  favourites:[{type: Schema.Types.ObjectId, ref: 'Color'}]
})

const User = model("User", userSchema);

module.exports = User;
