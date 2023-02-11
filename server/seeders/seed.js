const db = require('../config/connection');
const { User, Category, Quiz } = require('../models');
const userSeeds = require('./userSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const quizSeeds = require('./quizSeeds.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Category.deleteMany({});
    await Category.create(categorySeeds);
    await Quiz.deleteMany({});
    await Quiz.create(quizSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
