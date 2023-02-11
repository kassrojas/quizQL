const { Schema, model } = require('mongoose');
const Category = require('./Category');
const Results = require('./Results');
const bcrypt = require('bcrypt');

const leaderboardSchema = new Schema({
  category: [Category.schema],
  results: [Results.schema]
});

const Leaderboard = model('leaderboard', leaderboardSchema);

module.exports = Leaderboard;
