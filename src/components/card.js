import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

let affLink ="#";
  // "https://t.ajump1.com/246207/3788/0?bo=3471,3472,3473,3474,3475&po=6456";

export default function NewsItem(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 1 };
  // }
  // gotoAffiliateLink = (vidUrl) => {
  //   if (this.state.count == 2) {
  //     // window.open(vidUrl, "_blank");
  //      window.location.assign(vidUrl, "_blank");
  //     // this.setState({ count: this.state.count - 1 });
  //     this.state.count -= 1;
  //   } else {
  //     window.location.assign(
  //       "https://t.ajump1.com/246207/3788/0?bo=3471,3472,3473,3474,3475&po=6456",
  //       "_blank"
  //     );
  //     this.state.count += 1;
  //     // this.setState({ count: this.state.count +1 });
  //   }
  // };
  // render() {
    // let { title, imgUrl, url } = this.props;
    // let count = 1;
    // function handleClick(url) {
    //   if (count === 1) {
    //     count++;
    //     window.open(
    //       "https://t.ajump1.com/246207/3788/0?bo=3471,3472,3473,3474,3475&po=6456",
    //       "_blank"
    //     );
    //   } else if (count === 2) {
    //     count--;
    //     window.open(url);
    //   }
    // }
    return (
      <>
        <div className="cardStyle">
          <div
            className="card newsCard"
            style={{ width: "18rem", backgroundColor: "#fff0" }}
          >
            <a
              href="https://t.adtng2.com/246207/3785/0?bo=2753,2754,2755,2756&pyt=multi&po=6456"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="card-img-top"
                style={{ height: "12rem" }}
                src={props.imgUrl}
                alt="news"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "15px" }}>
                {props.title}
                <span style={{ fontSize: "10px" }}>(Full Video👇)</span>
              </h5>
              {/* <button
              onClick={() => handleClick(url)} target={'_blank'}
              className="btn d-inline btn-sm btn-primary"
            >
              Watch Now🎬
            </button> */}

              <Link
                to="/video"
                state={{ from: props.url }}
                className="btn d-inline btn-sm btn-primary"
              >
                Watch Now🎬
              </Link>
              <a
                href={affLink}
                target={"_blank"}
                className="btn mx-2 d-inline btn-sm btn-primary"
              >
                Download⬇️
              </a>
              <span style={{ fontSize: "10px", color: "red" }}></span>
              {/* <div style={{ fontSize: "10px", color: "red" }}>
              Link Will Work On Second Click
            </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }

