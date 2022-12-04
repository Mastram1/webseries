import React, { Component } from "react";
import "../App.css";

export default class NewsItem extends Component {
  render() {
    let { title, video, imgUrl, url } = this.props;
    return (
      <div className="cardStyle">
        <div
          className="card newsCard"
          style={{ width: "18rem", backgroundColor: "#fff0" }}
        >
          <img
            className="card-img-top"
            style={{ height: "12rem" }}
            src={imgUrl}
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "15px" }}>
              {title} <span style={{ fontSize: "10px" }}>(Full Video👇)</span>
            </h5>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn d-block btn-sm btn-primary"
            >
              Watch Now🎬
            </a>
          </div>
        </div>
      </div>
    );
  }
}
