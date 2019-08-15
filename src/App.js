import React from "react";
import "./App.css";
import { Link, IndexLink } from "react-router";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>react-router demo</h1>
        <ul>
          <li>
            <Link to="/home" activeStyle={{ color: "red" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeStyle={{ color: "red" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/inbox" activeStyle={{ color: "red" }}>
              Inbox
            </Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
