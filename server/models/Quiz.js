const { Schema, model } = require('mongoose');
const Category = require('./Category');

const quizSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
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

const Quiz = model('quiz', quizSchema);

module.exports = Quiz;