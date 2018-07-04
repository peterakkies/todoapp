import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import configureStore from "./redux/configureStore";
import Root from "./components/Root";

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
