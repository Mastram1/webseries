import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Web Series
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item  ">
                  <a
                    className="nav-link navLinks active"
                    aria-current="page"
                    href="/"
                    style={{
                      color: "White",
                      border: "1px dotted",
                      padding: "1.5px",
                      background: "#31121233",
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link navLinks active"
                    aria-current="page"
                    href="https://t.me/+x3H4JRAxwclhOWE1"
                    target="_blank"
                    style={{
                      color: "White",
                      border: "1px dotted",
                      padding: "1.5px",
                      background: "#31121233",
                    }}
                  >
                    Join Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
