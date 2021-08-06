import React, { Component } from "react";

class ExperienceTitle extends Component {
  render() {
    return (
      <div
        className="card-header d-lg-flex flex-row align-items-center experienceHeader"
        onClick={() => this.props.onToggleBody()}
      >
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-subtitle text-muted">{this.props.dates}</p>
      </div>
    );
  }
}

export default ExperienceTitle;
