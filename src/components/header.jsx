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
        <header className="container-fluid  d-flex justify-content-start justify-content-sm-center align-items-center appHeader">
          <img
            src={imgPath}
            className="ms-3 me-5 mx-sm-5 appLogo"
            alt="Profile"
          />
          <div className="appTitle">
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
