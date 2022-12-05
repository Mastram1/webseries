
import React, { Component } from "react";
import logo from "../img/alleps.jpg";
// import './payment.css';

export class Watch extends Component {
  render() {
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
              href="https://phallomax.com/?ref=mastram152" target='_blank'
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