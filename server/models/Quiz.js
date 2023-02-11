const { Schema, model } = require('mongoose');

const triviaQuizSchema = new Schema({
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

const TriviaQuiz = model('TriviaQuiz', triviaQuizSchema);

module.exports = TriviaQuiz;