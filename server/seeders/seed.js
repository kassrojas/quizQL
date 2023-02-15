const db = require('../config/connection');
const { User, Question, Result } = require('../models');
const userSeeds = require('./userSeeds.json');
const questionSeeds = require('./questionSeeds.json');
const resultSeeds = require('./resultSeeds.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Question.deleteMany({});
    await Question.create(questionSeeds);
    await Result.deleteMany({});
    await Result.create(resultSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
