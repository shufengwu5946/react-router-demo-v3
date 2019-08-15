import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router, Route, IndexRoute, hashHistory, Redirect } from "react-router";
import Home from "./Home";
import About from "./About";
import Inbox, { Message } from "./Inbox";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route
        path="/home"
        component={Home}
        onEnter={() => {
          console.log("Home", "enter");
        }}
        onLeave={() => {
          console.log("Home", "leave");
        }}
      />
      <Route
        path="/about"
        component={About}
        onEnter={() => {
          console.log("About", "enter");
        }}
        onLeave={() => {
          console.log("About", "leave");
        }}
      />
      <Route
        path="/inbox"
        component={Inbox}
        onEnter={() => {
          console.log("Inbox", "enter");
        }}
        onLeave={() => {
          console.log("Inbox", "leave");
        }}
      >
        <Route
          path="/message(/:id)"
          component={Message}
          onEnter={() => {
            console.log("Message", "enter");
          }}
          onLeave={() => {
            console.log("Message", "leave");
          }}
        />
        <Redirect from="message(/:id)" to="/message/(:id)" />
      </Route>
    </Route>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
