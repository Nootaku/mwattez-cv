import React, { Component } from "react";
import Experience from "./experience";
import experienceList from "./data/experiences.json";
import pdfResume from "./data/mwattez_cv.pdf"

class Experiences extends Component {
  state = {
    experiences: experienceList
  };

  render() {
    const { experiences } = this.state;

    return (
      <div>
        <p>
          Click{" "}
          <a href={pdfResume} download>
            <button className="downloadPDF">here</button>
          </a>{" "}
          to download a pdf-version of my CV.
        </p>
        {experiences.reverse().map(xp => (
          <Experience key={xp.id} experience={xp} />
        ))}
      </div>
    );
  }
}

export default Experiences;
