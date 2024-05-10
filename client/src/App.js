import React from 'react';
import './App.css';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN RSS Feed</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
