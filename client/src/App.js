import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    });

    if (loader.current) {
      observer.observe(loader.current)
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current)
      }
    };
  }, []);

  useEffect(() => {
    if (!loading && hasMore) {
      fetchPosts();
    }
  }, [loading, hasMore]);

  const fetchPosts = () => {
    setLoading(true);
    fetch(`http://127.0.0.1:5000/posts?page=${page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPosts(prevPosts => [...prevPosts, ...data]);
        setPage(prevPage => prevPage + 1);
        setHasMore(data.length > 0);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      fetchPosts();
    }
  };

  return (
    <div className="App">
      <div className="grid">
        {posts.map((post, index) => (
          <div key={index} className="card">
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.description}</p>
            <p>Source: {post.source}</p>
            <p>Creator: {post.creator}</p>
            <p>Time to Read: {post.timeToRead}</p>
            <a href={post.link}>Read more</a>
            <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
          </div>
        ))}
        <div ref={loader}></div>
      </div>
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
}

export default App;
