import React, { Component } from "react";
import AboutCard from "./about/aboutCard";
import "./css/about.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen_width: 0,
      isDesktop: window.screen.width >= 992 ? true : false,
    };
    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateView);
    this.updateView();
  }

  updateView() {
    this.setState({ screen_width: window.innerWidth });
    if (this.state.screen_width >= 992) {
      this.setState({ isDesktop: true });
    } else {
      this.setState({ isDesktop: false });
    }
  }

  buildView(isDesktop) {
    if (isDesktop) {
      return (
        <div className="row">
          <div className="col-sm-3">
            <div className="card mb-3">
              <AboutCard title="Contact Information" type="contact" />
            </div>
            <div className="card mb-3">
              <AboutCard title="Higher Education" type="education" />
            </div>
          </div>
          <div className="col-sm-9">
            <div className="card mb-3">
              <div className="card-body">
                <AboutCard title="Professional Profile" type="profile" />
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <AboutCard title="Who am I ?" type="whoami" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-sm-3">
            <div className="card mb-3">
              <AboutCard title="Contact Information" type="contact" />
            </div>
            <div className="card mb-3">
              <AboutCard title="Higher Education" type="education" />
            </div>
          </div>
          <div className="col-sm-9">
            <div className="card mb-3">
              <div className="card-body">
                <AboutCard title="Professional Profile" type="profile" />
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <AboutCard title="Who am I ?" type="whoami" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return this.buildView(this.state.isDesktop);
  }
}

export default About;
