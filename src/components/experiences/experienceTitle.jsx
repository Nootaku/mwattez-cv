import React, { Component } from 'react';

class ExperienceTitle extends Component {
    render() {
      return (
        <h4 className="card-header" onClick={() => this.props.onToggleBody()}>
          {this.props.title}<span className="experience-title-dates">{this.props.dates}</span>
        </h4>
      );
  }
}

export default ExperienceTitle;
