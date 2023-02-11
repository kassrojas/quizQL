const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  categoryId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = model('category', categorySchema);

module.exports = Category;