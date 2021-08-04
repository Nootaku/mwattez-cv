import React, { Component } from "react";
import pic from "./components/images/picture.png";
import "./components/css/App.css";

// Components
import Header from "./components/header";
import MainContent from "./components/mainContent";
import About from "./components/about";
import Experiences from "./components/experiences";
import Skillset from "./components/skillset";
import Footer from "./components/footer";

class App extends Component {
  state = {
    mainContent: <About />
  };

  handleChangeContent = contentValue => {
    if (contentValue === "about") {
      this.setState({ mainContent: <About /> });
    } else if (contentValue === "experiences") {
      this.setState({ mainContent: <Experiences /> });
    } else if (contentValue === "skillset") {
      this.setState({ mainContent: <Skillset /> });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header imgPath={pic} onChangeContent={this.handleChangeContent} />
        <main className="App-content container my-4">
          <MainContent content={this.state.mainContent} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
