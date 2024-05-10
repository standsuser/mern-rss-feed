const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/post');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/rss', { useNewUrlParser: true, useUnifiedTopology: true }) //can use localhost instead of 127.0.0.1
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  app.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: -1 }).limit(10); // Fetching latest 10 posts
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
