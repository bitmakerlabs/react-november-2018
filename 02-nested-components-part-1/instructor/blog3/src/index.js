import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Post from "./App";
import * as serviceWorker from "./serviceWorker";

let movies = [
  {
    title: "The Fellowship of the Ring",
    hours: 2,
    minutes: 58
  },
  {
    title: "The Two Towers",
    hours: 2,
    minutes: 59
  },
  {
    title: "The Return of the King",
    hours: 3,
    minutes: 21
  }
];

const obj = {
  title: "Dinosaurs are awesome",
  authors: ["Stealthy Stegosaurus", "Tiny trex", "Iguanadon Ivory"],
  comment: ["first"]
};

// ReactDOM.render(
//   <Post title={obj.title} allAuthores={obj.authors} comments={obj.comment} />,
//   document.getElementById("root")
// );

ReactDOM.render(<Post {...obj} />, document.getElementById("root"));

serviceWorker.unregister();
