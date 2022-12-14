import React, { Component } from "react";
import NewsItem from "./card";
import "../App.css";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1f272b75dccd422bbdffc6b0853dcc74`;
    let affUrl =
      "https://t.ajump1.com/246207/3788/0?bo=3471,3472,3473,3474,3475&po=6456";

    let data = {
      articles: [
        {
          author: "Mastram",
          title: "Khali Bus Ka Suhana Safar",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/GHFH6WJ/ep1.png",
        },
        {
          author: "Mastram",
          title: "Master Ji Ka Danda",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/h1wq9JR/Screenshot-158.png",
        },
        {
          author: "Mastram",
          title: "Sonu Ka Joban",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/NpCdfgt/Screenshot-173.png",
        },
        {
          author: "Mastram",
          title: "Abhineteri Ka Nirman",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/RT810Ls/MV5-BZWIy-OTJl-YTgt-NTA1-OS00-ZWU0-LWIz-Nzgt-MDc3-OTBj-MDY4-Ym-Q1-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-Q2-Mj-Q5.jpg",
        },
        {
          author: "Mastram",
          title: "Madhu Ki Do Saheliyan",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/1sFCBk4/MV5-BZTQx-Nj-M2-MDQt-Njg4-NS00-N2-M0-LWJh-NGEt-NDM0-Mjgx-MWIz-Zjgw-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-Q2-Mj-Q5.jpg",
        },
        {
          author: "Mastram",
          title: "Baniye Ka Lollypop",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/7vNQDMc/MV5-BMz-E5-Mz-Aw-M2-Mt-MDg1-OC00-Yzdj-LWJl-ZDAt-M2-Zk-Yjky-YTdm-OGMw-Xk-Ey-Xk-Fqc-Gde-QXVy-ODQw-MDcw.jpg",
        },
        {
          author: "Mastram",
          title: "Airoplane Mein Air Hostess",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/sJYfW77/MV5-BODA2-NDNk-MTct-MGIz-NC00-Mj-Nl-LWI0-NTMt-MDE3-OWIz-Yzlj-MDAz-Xk-Ey-Xk-Fqc-Gde-QXVy-Mjg0-Nj-Iy-N.jpg",
        },
        {
          author: "Mastram",
          title: "Bua Ke 56 Aasan",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/QNCYfPv/MV5-BODIy-MWY4-ZGQt-Mz-Nl-YS00-Mjkx-LTkx-NTIt-NDFi-ZGY3-ZWFh-N2-I3-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-Q2-Mj-Q5.jpg",
        },
        {
          author: "Mastram",
          title: "Vaibhav Ki Didi",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/ChhVrY8/MV5-BZTFk-OTcy-OWEt-ODVh-Zi00-MThm-LWIx-YTYt-Yj-M5-NDcw-YTQz-ODNi-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-Q2-Mj-Q5.jpg",
        },
        {
          author: "Mastram",
          title: "Mallu Aunty Ka Malmal",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/b2bY06L/Screenshot-187.png",
        },
        {
          author: "Mastram",
          title: "Mantriji Ka Sach",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/FBt9dnh/Screenshot-238.png",
        },
        {
          author: "Mastram",
          title: "Naino Se Naina Takraye",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/tX1WTKt/Screenshot-230.png",
        },
      ],
    };
    let parsedData = data;
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container newsContainer">
        {this.state.articles.map((ele) => {
          return (
            <div key={ele.url}>
              <NewsItem
                title={ele.title ? ele.title.slice(0, 30) : "Title"}
                video={ele.video}
                imgUrl={ele.urlToImage}
                url={ele.url}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
