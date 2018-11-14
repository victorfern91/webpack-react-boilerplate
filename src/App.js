import React from "react";
import ReactDOM from "react-dom";

let hot = null;

const App = () => (
    <h1>Hello World!</h1>
);

if (process.env.NODE_ENV === "development") {
     hot = require("react-hot-loader").hot;
}

export default process.env.NODE_ENV === "development"
    ? hot(module)(App)
    : App;
