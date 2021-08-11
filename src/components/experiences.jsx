import React, { Component } from "react";
import Experience from "./experiences/experience";
import ExperienceDownloadPdf from "./experiences/experienceDownloadPdf";
import experienceList from "./data/experiences.json";

class Experiences extends Component {
  state = {
    experiences: experienceList,
  };

  render() {
    const { experiences } = this.state;
    const xps = experiences[0].id === 1 ? experiences.reverse() : experiences;

    return (
      <div>
        <ExperienceDownloadPdf />
        {xps.map((xp) => (
          <Experience key={xp.id} experience={xp} isDesktop={this.props.lg} />
        ))}
      </div>
    );
  }
}

export default Experiences;
