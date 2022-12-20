import "./App.css";
import React from "react";
import News from "./components/cards";
import Navbar from "./components/Navbar";
import Watch from "./components/watch";
import Blog from "./components/blog";

// import Video from "./components/Video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/video";

 function App (){
  // render() {
    //  const { url } = this.props;
    // setTimeout(() => {
    //   alert("Link might not work please reload the page");
    // }, 30000);
    return (
      <Router>
        <>
          <Navbar />
          <Blog/>
        </>
        <Routes>
          <Route exact path="/" element={<News />} />
          <Route exact path="/watch" element={<Watch />} />
          <Route exact path="/video" element={<Video/>} />
        </Routes>
      </Router>
    );
  }


export default App;
 