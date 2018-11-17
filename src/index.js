import React from "react";
import ReactDOM from "react-dom";
import "style.scss";

let HelloWorld = () => {
  return <h1>welcome!</h1>
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById("root")
);