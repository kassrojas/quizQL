const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const resultsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  score: {
    type: Number,
    required: true,
  },
});

const Results = model("results", resultsSchema);

module.exports = Results;
