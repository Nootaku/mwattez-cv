import React, { Component } from "react";
import Navbar from "./navbar";

class Header extends Component {
  state = {
    imgPath: this.props.imgPath,
  };

  render() {
    const { imgPath } = this.state;
    return (
      <React.Fragment>
        <header className="App-header mx-auto">
          <img src={imgPath} className="App-logo mx-5" alt="Profile" />
          <div className="App-Title">
            <h1>Maxime WATTEZ</h1>
            <h2>Full Stack Software Developer</h2>
          </div>
        </header>
        <Navbar onChangeContent={this.props.onChangeContent} />
      </React.Fragment>
    );
  }
}

export default Header;
