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
  
    // let count =0;
    // if(count==2){
    //   window.open(
    //     "https://t.ajump1.com/246207/3788/0?bo=3471,3472,3473,3474,3475&po=6456"
    //   );
    // }
    let affUrl ="#";
      // "https://t.ajump1.com/246207/3788/0?bo=3471,3472,3473,3474,3475&po=6456";

    let data = {
      articles: [
        {
          author: "Mastram",
          title: "खाली बस का सुहाना सफर",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/P95gfTr/75dw56.gif",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E01.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },
        {
          author: "Mastram",
          title: "मास्टर जी का डंडा",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/Fzcjm7G/75dwg3.gif",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E02.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },
        {
          author: "Mastram",
          title: "सोनू का जोबन",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/1ZX8fxH/75dx4q.gif",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E09.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },
        {
          author: "Mastram",
          title: "अभिनेत्री का निर्माण",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/RT810Ls/MV5-BZWIy-OTJl-YTgt-NTA1-OS00-ZWU0-LWIz-Nzgt-MDc3-OTBj-MDY4-Ym-Q1-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-Q2-Mj-Q5.jpg",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E07.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },
        {
          author: "Mastram",
          title: "हवाई जहाज में एयर होस्टेस",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/8Mt0LpY/75dws0.gif",
          VideoUrl:
            "https://www.veed.io/embed/15f088c4-3a0e-4e8e-a9ed-293886becad9",
        },
        {
          author: "Mastram",
          title: "मधु की दो सहेलियां",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/1sFCBk4/MV5-BZTQx-Nj-M2-MDQt-Njg4-NS00-N2-M0-LWJh-NGEt-NDM0-Mjgx-MWIz-Zjgw-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-Q2-Mj-Q5.jpg",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E08.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },
        {
          author: "Mastram",
          title: "वैभव की दीदी",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/r7mVbtd/75dwxo.gif",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E06.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },
        {
          author: "Mastram",
          title: "बनिए का लॉलीपॉप",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/7vNQDMc/MV5-BMz-E5-Mz-Aw-M2-Mt-MDg1-OC00-Yzdj-LWJl-ZDAt-M2-Zk-Yjky-YTdm-OGMw-Xk-Ey-Xk-Fqc-Gde-QXVy-ODQw-MDcw.jpg",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E04.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },

        {
          author: "Mastram",
          title: "बुआ के 56 आसन",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage:
            "https://i.ibb.co/QNCYfPv/MV5-BODIy-MWY4-ZGQt-Mz-Nl-YS00-Mjkx-LTkx-NTIt-NDFi-ZGY3-ZWFh-N2-I3-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-Q2-Mj-Q5.jpg",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E05.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },

        {
          author: "Mastram",
          title: "मल्लू आंटी का मलमल",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          // urlToImage: "https://i.ibb.co/b2bY06L/Screenshot-187.png",
          urlToImage: "https://i.ibb.co/5Lq9B9K/75dfwo.gif",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E03.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },
        {
          author: "Mastram",
          title: "मंत्रीजी की सहायक",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/FBt9dnh/Screenshot-238.png",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E05.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },
        {
          author: "Mastram",
          title: "नैनो से नैना टकराए",
          video: "https://www.youtube.com/watch?v=qKNx30OCjpA",
          url: affUrl,
          urlToImage: "https://i.ibb.co/tX1WTKt/Screenshot-230.png",
          VideoUrl:
            "https://archive.org/download/mastram.-s-01-e-01.-hindi.-tvseries-land-720p.-webrip/Mastram.S01E05.Hindi.%5B%40TVseriesLand%5D720p.WEBRip.mp4",
        },
        {
          author: "Mastram",
          title: "भाभी के साथ चक्कर",
          url: affUrl,
          urlToImage: "https://i.ibb.co/JK6y0tK/images.jpg",
          VideoUrl:
            "https://archive.org/embed/hunterrr-hd-gulshan-devaiah-radhika-apte-sai-tamhankar-veera-saxena-trim",
        },
        {
          author: "Charamsukh",
          title: "Chawl House",
          url: affUrl,
          urlToImage: "https://i.ibb.co/GtP9SLd/75eepm.gif",
          VideoUrl:
            "https://desiporn.tube/get_file/1/81454486a7b0067b63b2dc726d1e4c2a7261c9c24a/12000/12983/12983_hq.mp4/?d=884&br=168&ti=1671972713",
        },
      ],
    };
    let parsedData = data;
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    // count++;
  }
  render() {
    return (
      <>
        <div className="container newsContainer">
          {this.state.articles.map((ele) => {
            return (
              <div key={ele.url}>
                <NewsItem
                  title={ele.title ? ele.title.slice(0, 30) : "Title"}
                  imgUrl={ele.urlToImage}
                  url={ele.VideoUrl}
                />
                <div>
                  
                </div>
              </div>
            );
          })}
        </div>
        <div><img src="" alt="" /></div>
      </>
    );
  }
}
