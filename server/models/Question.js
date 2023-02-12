const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  question: {
    type: String,
  },
  correct_answer: {
    type: String,
  },
  incorrect_answers: [String],
  difficulty: {
    type: String
  }
})

const Question = model('question', questionSchema);

module.exports = Question;