import React, { Component } from "react";
import Navbar from "./navbar";

class Header extends Component {
  state = {
    imgPath: this.props.imgPath
  };

  render() {
    return (
      <React.Fragment>
        <header className="App-header mx-auto">
          <img src={this.state.imgPath} className="App-logo mx-5" />
          <h1>Maxime WATTEZ CV</h1>
        </header>
        <Navbar onChangeContent={this.props.onChangeContent} />
      </React.Fragment>
    );
  }
}

export default Header;
