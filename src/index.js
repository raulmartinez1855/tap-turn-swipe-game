import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

console.log(`
Hi Welcome, to Tap Turn Swipe! A simple but addictive game for phone and tablets.
On your laptop or Desktop? Just choose of the phone presets in the Dev Tools.
`);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
