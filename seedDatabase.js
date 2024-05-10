// seedDatabase.js
const mongoose = require('mongoose');
const Post = require('./models/Post');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Function to generate random posts
function generateRandomPosts(numPosts) {
  const posts = [];
  const sources = ['Blog', 'News', 'Forum'];
  const creators = ['User1', 'User2', 'User3'];
  const titles = ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur Adipiscing', 'Sed Do Eiusmod', 'Tempor Incididunt'];
  const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'];

  for (let i = 0; i < numPosts; i++) {
    const source = sources[Math.floor(Math.random() * sources.length)];
    const creator = creators[Math.floor(Math.random() * creators.length)];
    const title = titles[Math.floor(Math.random() * titles.length)];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    const image = `https://source.unsplash.com/featured/?${title}`;
    const timeToRead = `${Math.floor(Math.random() * 10) + 1} min`;
    const link = `https://example.com/${title.replace(/\s+/g, '-')}`;

    posts.push({
      source,
      image,
      creator,
      title,
      description,
      timeToRead,
      link
    });
  }

  return posts;
}

// Populate database with random posts
async function seedDatabase() {
  try {
    // Clear existing posts
    await Post.deleteMany({});
    
    // Generate 20 random posts
    const randomPosts = generateRandomPosts(20);
    
    // Insert into database
    await Post.insertMany(randomPosts);
    
    console.log('Database seeded successfully.');
    mongoose.disconnect();
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.disconnect();
  }
}

// Call the seedDatabase function
seedDatabase();
