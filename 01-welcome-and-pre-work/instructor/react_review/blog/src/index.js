import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let post = {
  title: 'Dinosaurs are awesome',
  author: 'Stealthy Stegosauraus',
  body: "Check out this body",
  comments: ["First!", "Second!"]
}

ReactDOM.render(
  <App post={post} owner="Fred" />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
