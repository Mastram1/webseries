import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Web Series
            </Link>
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
                  <Link
                    className="nav-link navLinks active"
                    aria-current="page"
                    to="/"
                    style={{
                      color: "White",
                      border: "1px dotted",
                      padding: "1.5px",
                      background: "#31121233",
                    }}
                  >
                    Home
                  </Link>
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
                <li className="nav-item ">
                  <a
                    className="nav-link navLinks active"
                    aria-current="page"
                    href="https://www.trackcherry.com/41RKC2K/2CTPL/?uid=12"
                    target="_blank"
                    style={{
                      color: "White",
                      border: "1px dotted",
                      padding: "1.5px",
                      background: "#31121233",
                    }}
                  >
                    Ullu Webseries
                  </a>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link navLinks active"
                    aria-current="page"
                    to="/watch"
                    style={{
                      color: "White",
                      border: "1px dotted",
                      padding: "1.5px",
                      background: "#31121233",
                    }}
                  >
                    Download All Episodes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
