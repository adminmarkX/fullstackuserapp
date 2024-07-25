import React, { Component } from "react";
import "./navbarComponend.css";

class navbarComponend extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a className="navbar-brand">User Managment App</a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default navbarComponend;
