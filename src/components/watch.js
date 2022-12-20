import React, { Component } from "react";
import logo from "../img/alleps.jpg";

// import './payment.css';

export class Watch extends Component {
  render() {
    function handleClick() {
      window.open("https://www.example.com", "_blank");
    }
    return (
      <>
        <div className="container">
          <h3>
            Now Watch All Episodes <br />
            <div class="text-muted" style={{ fontSize: "0.6rem" }}>
              (Complete All Steps Mentioned)
            </div>
          </h3>
          <br />
          <img
            className="img-fluid"
            src={logo}
            alt=""
            style={{
              height: "100px",
              marginTop: "10px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <div className="d-block">
            <a
              type="button"
              className="btn my-1 btn-primary btn-lg btn-b d-block"
              // href="https://t.acam.link/246207/3664/29941?bo=2779,2778,2777,2776,2775&po=6533"
              // href="/"
              target="_blank"
            >
              Download Now
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Watch;
