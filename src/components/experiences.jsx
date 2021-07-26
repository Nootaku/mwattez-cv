import React, { Component } from "react";
import Experience from "./experience";

class Experiences extends Component {
  state = {
    experiences: [
      {
        id: 1,
        company: "Degetel",
        title: "Software Developer",
        description: "Philéas, Robocloud",
        stack: ["Python3", "Pandas", "Numpy"]
      },
      {
        id: 2,
        company: "Itinari",
        title: "Frontend Developer",
        description: "itinari.com",
        stack: ["javascript", "Vue.js", "GraphQL"]
      },
      {
        id: 3,
        company: "Laborelec",
        title: "Software Developer",
        description: "Tons of stuf",
        stack: ["Python3", "pyTest", "unittest"]
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.experiences.map(xp => (
          <Experience
            key={xp.id}
            company={xp.company}
            title={xp.title}
            description={xp.description}
            stack={xp.stack}
          />
        ))}
      </div>
    );
  }
}

export default Experiences;
