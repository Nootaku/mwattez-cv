import React, { Component } from "react";
import AboutCard from "./about/aboutCard";
import "./css/about.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  buildView() {
    if (this.props.lg) {
      return (
        <div className="row">
          <div className="col-sm-3">
            <div className="card mb-3">
              <AboutCard title="Higher Education" type="education" />
            </div>
          </div>
          <div className="col-sm-9">
            <div className="card mb-3">
              <AboutCard title="Professional Profile" type="profile" />
            </div>
            <div className="card mb-3">
              <AboutCard title="About Me" type="whoami" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <AboutCard title="Presentation" type="profile" />
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <AboutCard title="About Me" type="whoami" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <AboutCard title="Higher Education" type="education" />
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-3">
            <div className="card-body">
              <AboutCard title="Presentation" type="profile" />
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <AboutCard title="About Me" type="whoami" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-3">
            <AboutCard title="Higher Education" type="education" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
