const { Schema, model } = require("mongoose");

const resultsSchema = new Schema({
  score: {
    type: Number,
    required: true,
  },
});

module.exports = resultsSchema;
