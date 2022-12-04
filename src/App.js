import "./App.css";
import React, { Component } from "react";
import News from "./components/cards";
import Navbar from "./components/Navbar";

export class App extends Component {
  render() {
    return (
      <>
     
          <Navbar />
          <News />
      </>
    );
  }
}

export default App;
 