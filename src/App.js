import React, { Component } from "react";
import pic from "./components/images/picture.png";
import "./components/css/App.css";

// Components
import Header from "./components/header";
import About from "./components/about";
import Experiences from "./components/experiences";
import Skillset from "./components/skillset";
import Email from "./components/email";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: window.innerWidth >= 992 ? true : false,
      mainContent: "about",
    };
    this.updateScreenWidth = this.updateScreenWidth.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateScreenWidth);
    this.updateScreenWidth();
  }

  updateScreenWidth() {
    this.setState({ isDesktop: window.innerWidth >= 992 });
  }

  handleChangeContent(contentValue) {
    this.setState({ mainContent: contentValue });
  }

  render() {
    const { mainContent, isDesktop } = this.state;
    return (
      <React.Fragment>
        <Header imgPath={pic} onChangeContent={this.handleChangeContent} />
        <main className="container my-4">
          {mainContent === "about" && <About lg={isDesktop} />}
          {mainContent === "experiences" && <Experiences lg={isDesktop} />}
          {mainContent === "skillset" && <Skillset lg={isDesktop} />}
          {mainContent === "email" && <Email />}
        </main>
        <Footer onChangeContent={this.handleChangeContent} />
      </React.Fragment>
    );
  }
}

export default App;
