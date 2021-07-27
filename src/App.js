import React, { Component } from "react";
import pic from "./picture.png";
import "./components/css/App.css";

// Components
import Header from "./components/header";
import MainContent from "./components/mainContent";
import About from "./components/about";
import Experiences from "./components/experiences";
import Skillset from "./components/skillset";

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
      </React.Fragment>
    );
  }
}

export default App;
