import React, { Component } from "react";
import About from "./about";
import Experiences from "./experiences";

class MainContent extends Component {
  render() {
    return this.props.content;
  }
}

export default MainContent;
