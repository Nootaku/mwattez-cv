import React, { Component } from "react";
import Experience from "./experience";
import experienceList from "./experiences.json";

class Experiences extends Component {
  state = {
    experiences: experienceList
  };

  render() {
    return (
      <div>
        {this.state.experiences.reverse().map(xp => (
          <Experience key={xp.id} experience={xp} />
        ))}
      </div>
    );
  }
}

export default Experiences;
