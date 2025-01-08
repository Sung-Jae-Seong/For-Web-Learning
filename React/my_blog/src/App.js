import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let post = 'This is my first post';
  let [postList, setPostList] = useState([
                                  'This is my first post',
                                  'This is my second post',
                                  'This is my third post',
                                ]);
  // postname is the state's value
  // stateController is a function to change the state
  // if state is changed, the component will re-render automatically
  // but variable will not re-render automatically

  let [like, setLike] = useState(0);
  
  function increaseLike() {
    setLike(like +  1);
  }

  return (
    <div className="App">
      <div className="blog-nav">
        <h4>My Blog</h4>
      </div>
      
      <div className="blog-post">
        <h4>{postList[0]} <span onClick={ increaseLike }>👍</span> {like} </h4>
        <p>posted on 02/17</p>
      </div>

      <div className="blog-post">
        <h4>{postList[1]}</h4>
        <p>posted on 02/17</p>
      </div>

      <div className="blog-post">
        <h4>{postList[2]}</h4>
        <p>posted on 02/17</p>
      </div>

    </div>
  );
}

export default App;
