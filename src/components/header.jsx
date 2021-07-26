import React, { Component } from "react";

class Header extends Component {
  state = {
    imgPath: this.props.imgPath
  };

  render() {
    return (
      <header className="App-header">
        <img src={this.state.imgPath} className="App-logo mx-5" />
        <h1>Maxime WATTEZ CV</h1>
      </header>
    );
  }
}

export default Header;
