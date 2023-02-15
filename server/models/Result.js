const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const resultSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  score: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});

const Result = model("result", resultSchema);

module.exports = Result;
