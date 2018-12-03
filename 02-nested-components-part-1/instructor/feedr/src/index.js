import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const newsFeedData = [
    {
      title: "Lorem Ipsum",
      tags: "Placeholder1, Placeholder2",
      image: "https://loremflickr.com/400/250/dog?a",
      impressions: 10
    },
    {
      title: "Dolor Sit Amet",
      tags: "Placeholder2",
      image: "https://loremflickr.com/400/250/dog?b",
      impressions: 15
    },
    {
      title: "Nesque Ipsum",
      tags: "Placeholder2, Placeholder3",
      image: "https://loremflickr.com/400/250/dog?c",
      impressions: 100
    }
  ];
ReactDOM.render(<App newsFeedData={newsFeedData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
