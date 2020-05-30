import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

console.log(`
Hi Welcome, to Tap Turn Swipe! A simple but addictive game for phone and tablets.
If you can read this you are probably on your Desktop or Laptop, for the best experience we recommend playing on your mobile device.
However, you could turn on responsive mode and resize the browser on the 'TURN' action if you would like to play on a Desktop or Laptop.
`);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
