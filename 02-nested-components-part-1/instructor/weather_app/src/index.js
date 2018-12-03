import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const weatherData = [
  {
    "img_url":
      "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
    "condition": "clear",
    "time": "day"
  },
  {
    "img_url":
      "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
    "condition": "clear",
    "time": "day"
  },
  {
    "img_url":
      "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
    "condition": "clear",
    "time": "day"
  },
  {
    "img_url":
      "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
    "condition": "clear",
    "time": "day"
  },
  {
    "img_url":
      "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
    "condition": "clear",
    "time": "day"
  }
];

ReactDOM.render(<App weatherData = {weatherData}/>, document.getElementById("root"));

serviceWorker.unregister();
