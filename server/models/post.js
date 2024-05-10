// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  source: String,
  image: String,
  creator: String,
  timeToRead: String,
  title: String,
  description: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
