import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <div>{post.source}</div>
              <img src={post.image} alt="Post" />
              <div>{post.creator}</div>
              <div>{post.dateTimeToRead}</div>
              <div>{post.title}</div>
              <div>{post.shortDescription}</div>
              <a href={post.link}>Read more</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
