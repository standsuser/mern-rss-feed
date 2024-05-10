// app.get('/posts', async (req, res) => {
//     try {
//       const posts = await Post.find().sort({ createdAt: -1 }).limit(10); // Fetching latest 10 posts
//       res.json(posts);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server Error" });
//     }
//   });