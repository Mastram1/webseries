import "./App.css";
import React, { Component } from "react";
import News from "./components/cards";
import Navbar from "./components/Navbar";
import Watch from "./components/watch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar/>
        </>
        <Routes>
          <Route exact path="/" element={<News />} />
          <Route exact path="/watch" element={<Watch />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
 